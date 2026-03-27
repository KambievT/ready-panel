import { NextRequest, NextResponse } from "next/server";
import { verifyFirebaseToken } from "@/lib/verify-firebase-token";
import { initializeApp, deleteApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  Timestamp,
  terminate,
} from "firebase/firestore";
import { getFirebaseApp } from "@/lib/firebase";

const COLLECTION = "blog_articles";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/** Create a temporary Firebase app + Firestore for write operations */
function createTempDb() {
  const name = `blog-write-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const app = initializeApp(firebaseConfig, name);
  const db = getFirestore(app);
  return { app, db };
}

/** Clean up temporary app to prevent hanging connections */
async function cleanupTemp(
  app: ReturnType<typeof initializeApp>,
  db: ReturnType<typeof getFirestore>,
) {
  try {
    await terminate(db);
    await deleteApp(app);
  } catch {
    // ignore cleanup errors
  }
}

async function requireAuth(req: NextRequest): Promise<boolean> {
  const token = req.headers.get("authorization")?.slice(7);
  if (!token) return false;
  return verifyFirebaseToken(token);
}

// GET /api/blog — public, list articles (uses shared instance — reads are fine)
export async function GET() {
  try {
    const db = getFirestore(getFirebaseApp());
    const q = query(collection(db, COLLECTION), orderBy("createdAt", "desc"));
    const snap = await getDocs(q);
    const articles = snap.docs.map((d) => ({
      id: d.id,
      ...d.data(),
      createdAt:
        d.data().createdAt instanceof Timestamp
          ? d.data().createdAt.toDate().toISOString()
          : d.data().createdAt,
    }));
    return NextResponse.json({ articles });
  } catch (err) {
    console.error("List articles error:", err);
    return NextResponse.json(
      { error: "Не удалось получить статьи" },
      { status: 500 },
    );
  }
}

// POST /api/blog — admin only, create article
export async function POST(req: NextRequest) {
  if (!(await requireAuth(req))) {
    return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  }

  const { app, db } = createTempDb();
  try {
    const { title, imageUrl } = await req.json();

    if (!title || typeof title !== "string" || title.trim().length === 0) {
      return NextResponse.json(
        { error: "Заголовок обязателен" },
        { status: 400 },
      );
    }

    const docRef = await addDoc(collection(db, COLLECTION), {
      title: title.trim(),
      imageUrl: imageUrl || "",
      createdAt: Timestamp.now(),
    });

    return NextResponse.json({
      article: {
        id: docRef.id,
        title: title.trim(),
        imageUrl: imageUrl || "",
        createdAt: new Date().toISOString(),
      },
    });
  } catch (err) {
    console.error("Create article error:", err);
    return NextResponse.json(
      { error: "Не удалось создать статью" },
      { status: 500 },
    );
  } finally {
    await cleanupTemp(app, db);
  }
}

// DELETE /api/blog — admin only, delete article
export async function DELETE(req: NextRequest) {
  if (!(await requireAuth(req))) {
    return NextResponse.json({ error: "Не авторизован" }, { status: 401 });
  }

  const { app, db } = createTempDb();
  try {
    const { id } = await req.json();

    if (!id || typeof id !== "string") {
      return NextResponse.json(
        { error: "ID статьи обязателен" },
        { status: 400 },
      );
    }

    await deleteDoc(doc(db, COLLECTION, id));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Delete article error:", err);
    return NextResponse.json(
      { error: "Не удалось удалить статью" },
      { status: 500 },
    );
  } finally {
    await cleanupTemp(app, db);
  }
}
