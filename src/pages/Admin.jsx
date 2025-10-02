import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  // Load data from backend
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/contact`);
        if (!res.ok) throw new Error("Failed to fetch contacts");
        const data = await res.json();
        setContacts(data);
      } catch (err) {
        setContacts([]);
      }
    };
    fetchContacts();
  }, []);

  // Delete contact after confirmation
  const confirmDelete = async () => {
    const target = contacts[deleteIndex];
    if (!target?._id) {
      setShowConfirm(false);
      setDeleteIndex(null);
      return;
    }
    try {
      const res = await fetch(`${API_BASE_URL}/api/contact/${target._id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete");
      const updatedContacts = contacts.filter((_, i) => i !== deleteIndex);
      setContacts(updatedContacts);
    } catch (err) {
      // noop UI; could add toast
    } finally {
      setShowConfirm(false);
      setDeleteIndex(null);
    }
  };

  const handleDeleteClick = (index) => {
    setDeleteIndex(index);
    setShowConfirm(true);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setDeleteIndex(null);
  };

  return (
    <section className="w-full min-h-screen bg-black p-6 md:p-10 text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Admin Panel - Contact Submissions
      </h2>

      {contacts.length === 0 ? (
        <p className="text-center text-gray-400">No submissions yet.</p>
      ) : (
        <div className="overflow-x-auto rounded overflow-hidden shadow-lg">
          <table className="w-full border-collapse border border-gray-700 text-sm md:text-base">
            <thead>
              <tr className="bg-zinc-950 text-gray-200">
                <th className="border border-gray-700 px-4 py-2">Name</th>
                <th className="border border-gray-700 px-4 py-2">Email</th>
                <th className="border border-gray-700 px-4 py-2">Phone</th>
                <th className="border border-gray-700 px-4 py-2">Comment</th>
                <th className="border border-gray-700 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr
                  key={contact._id || index}
                  className="text-center hover:bg-zinc-900 transition"
                >
                  <td className="border border-gray-700 px-4 py-2">
                    {contact.name}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    {contact.email}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    {contact.phone}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    {contact.comment}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    <button
                      onClick={() => handleDeleteClick(index)}
                      className="bg-red-500 hover:bg-red-600 cursor-pointer text-white px-3 py-1 rounded-md text-sm md:text-base transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Stylish Confirm Card */}
      {showConfirm && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50"
          onClick={cancelDelete} // Close on background click
        >
          <div
            className="bg-white text-black rounded-2xl shadow-xl p-6 w-[90%] max-w-sm md:max-w-md text-center animate-fadeIn"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <h2 className="text-lg md:text-xl font-semibold mb-2">
              Confirm Deletion
            </h2>
            <p className="text-sm text-gray-600 mb-5">
              Are you sure you want to delete this contact?
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-zinc-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Admin;
