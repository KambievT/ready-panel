/**
 * Verify a Firebase ID token using Firebase REST API.
 * No firebase-admin / service account required.
 */
export async function verifyFirebaseToken(idToken: string): Promise<boolean> {
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      },
    );
    return res.ok;
  } catch {
    return false;
  }
}
