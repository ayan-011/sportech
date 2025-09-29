import React, { useEffect, useState } from "react";

const Admin = () => {
  const [contacts, setContacts] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("contactData")) || [];
    setContacts(storedData);
  }, []);

  // Delete contact
  const handleDelete = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
    localStorage.setItem("contactData", JSON.stringify(updatedContacts));
  };

  return (
    <section className="w-full min-h-screen bg-black p-10">
      <h2 className="text-3xl font-bold mb-6">Admin Panel - Contact Submissions</h2>

      {contacts.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <div className="overflow-x-auto rounded overflow-hidden" >
          <table className="w-full border-collapse border border-zinc-300 ">
            <thead>
              <tr className="bg- ">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Phone</th>
                <th className="border border-gray-300 px-4 py-2">Comment</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">{contact.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{contact.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{contact.phone}</td>
                  <td className="border border-gray-300 px-4 py-2">{contact.comment}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button
                      onClick={() => handleDelete(index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
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
    </section>
  );
};

export default Admin;
