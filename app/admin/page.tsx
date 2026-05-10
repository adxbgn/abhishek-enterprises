"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { getCurrentUser, checkAdminRole, logout } from "@/lib/auth";
import { onAuthStateChanged, User } from "firebase/auth";
import AdminLogin from "@/components/AdminLogin";

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const adminStatus = await checkAdminRole(currentUser);
        setIsAdmin(adminStatus);
        
        if (adminStatus) {
          // Redirect to dashboard if admin is logged in
          router.push("/dashboard");
          return;
        } else {
          // User is authenticated but not an admin
          await logout();
          setUser(null);
          setIsAdmin(false);
        }
      } else {
        setUser(null);
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    setIsAdmin(false);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!user || !isAdmin) {
    return <AdminLogin />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Admin Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Welcome back, {user.email}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            Logout
          </button>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium text-gray-900">
            Admin Panel
          </h2>
          <p className="text-sm text-gray-600">
            This is the admin dashboard. You can add your admin functionality here.
          </p>
        </div>
      </div>
    </div>
  );
}
