"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  updateDoc,
  doc,
} from "firebase/firestore";
import QueryModal from "@/components/QueryModal";
import Pagination from "@/components/Pagination";

interface Query {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: "new" | "replied";
  createdAt?: any;
}

export default function QueriesPage() {
  const [queries, setQueries] = useState<Query[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuery, setSelectedQuery] = useState<Query | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchQueries();
  }, []);

  const fetchQueries = async () => {
    try {
      const queriesRef = collection(db, "queries");
      const q = query(queriesRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const queriesData: Query[] = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        queriesData.push({
          id: doc.id,
          name: data.name || "",
          email: data.email || "",
          phone: data.phone || "",
          message: data.message || "",
          status: (data.status || "new") as "new" | "replied",
          createdAt: data.createdAt,
        });
      });

      setQueries(queriesData);
    } catch (error) {
      console.error("Error fetching queries:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewQuery = (query: Query) => {
    setSelectedQuery(query);
    setIsModalOpen(true);
  };

  const handleStatusChange = async (queryId: string, newStatus: "new" | "replied") => {
    try {
      await updateDoc(doc(db, "queries", queryId), {
        status: newStatus,
      });
      fetchQueries();
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedQuery(null);
  };

  // Calculate pagination
  const totalPages = Math.ceil(queries.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedQueries = queries.slice(startIndex, endIndex);

  const getStatusBadge = (status: string) => {
    if (status === "replied") {
      return (
        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
          Replied
        </span>
      );
    }
    return (
      <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
        New
      </span>
    );
  };

  return (
    <div className="h-full p-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Card */}
        <div className="mb-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900">Website Queries</h1>
        </div>

        {/* Queries Table */}
        <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
          {loading ? (
            <div className="p-8 text-center text-gray-600">Loading...</div>
          ) : queries.length === 0 ? (
            <div className="p-8 text-center text-gray-600">
              No queries found.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-200 bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Email Address
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Phone Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {paginatedQueries.map((query) => (
                    <tr key={query.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {query.name}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                        {query.email}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                        {query.phone}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm">
                        {getStatusBadge(query.status)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm">
                        <button
                          onClick={() => handleViewQuery(query)}
                          className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {!loading && queries.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedQuery && (
        <QueryModal
          query={selectedQuery}
          onClose={handleModalClose}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}
