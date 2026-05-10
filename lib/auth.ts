import { auth, db } from "./firebase";
import { User, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export interface UserData {
  role: string;
  email?: string;
  [key: string]: any;
}

/**
 * Check if the current user is an admin
 * @returns Promise<boolean> - true if user is authenticated and has admin role
 */
export async function isAdmin(): Promise<boolean> {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        resolve(false);
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data() as UserData;
          resolve(userData.role === "admin");
        } else {
          resolve(false);
        }
      } catch (error) {
        console.error("Error checking admin status:", error);
        resolve(false);
      }
    });
  });
}

/**
 * Get current authenticated user
 * @returns Promise<User | null>
 */
export function getCurrentUser(): Promise<User | null> {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      resolve(user);
    });
  });
}

/**
 * Get user data from Firestore
 * @param userId - User ID
 * @returns Promise<UserData | null>
 */
export async function getUserData(userId: string): Promise<UserData | null> {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      return userDoc.data() as UserData;
    }
    return null;
  } catch (error) {
    console.error("Error getting user data:", error);
    return null;
  }
}

/**
 * Sign in with email and password
 */
export async function login(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

/**
 * Sign out current user
 */
export async function logout() {
  return signOut(auth);
}

/**
 * Check if user has admin role (synchronous check with current user)
 */
export async function checkAdminRole(user: User | null): Promise<boolean> {
  if (!user) return false;

  try {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      const userData = userDoc.data() as UserData;
      return userData.role === "admin";
    }
    return false;
  } catch (error) {
    console.error("Error checking admin role:", error);
    return false;
  }
}
