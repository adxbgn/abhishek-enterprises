"use client";

import { useState } from "react";

interface Query {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: "new" | "replied";
}

interface QueryModalProps {
  query: Query;
  onClose: () => void;
  onStatusChange: (queryId: string, newStatus: "new" | "replied") => void;
}

export default function QueryModal({
  query,
  onClose,
  onStatusChange,
}: QueryModalProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleStatusChange = (newStatus: "new" | "replied") => {
    onStatusChange(query.id, newStatus);
    setIsDropdownOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-2xl rounded-lg border border-gray-200 bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Query Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <p className="mt-1 text-sm text-gray-900">{query.name}</p>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <p className="mt-1 text-sm text-gray-900">{query.email}</p>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <p className="mt-1 text-sm text-gray-900">{query.phone}</p>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Status</label>
            <div className="relative mt-1">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  query.status === "replied"
                    ? "bg-green-100 text-green-800 hover:bg-green-200"
                    : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                }`}
              >
                {query.status === "replied" ? "Replied" : "New"}
                <svg
                  className={`h-4 w-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsDropdownOpen(false)}
                  ></div>
                  <div className="absolute left-0 top-full z-20 mt-1 w-40 rounded-lg border border-gray-200 bg-white shadow-lg">
                    <button
                      onClick={() => handleStatusChange("new")}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                        query.status === "new"
                          ? "bg-blue-50 text-blue-800"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
                        New
                      </div>
                    </button>
                    <button
                      onClick={() => handleStatusChange("replied")}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                        query.status === "replied"
                          ? "bg-green-50 text-green-800"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        Replied
                      </div>
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <div className="mt-1 rounded-lg border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm text-gray-900 whitespace-pre-wrap">
                {query.message}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
