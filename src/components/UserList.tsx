"use client";

import React, { useState } from "react";

// User type
export type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

// Prop type
type Props = {
  users: User[];
};

// Add props for more reusability
export default function UserList({ users }: Props) {
  const [search, setSearch] = useState<string>("");

  // Filter users based on search input
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl">
      <h2 className="text-2xl font-semibold mb-4">Users</h2>

      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border rounded-md mb-4"
      />

      {filteredUsers.length === 0 ? (
        <p className="text-center">No results found</p> // This is shown if no matches
      ) : (
        <ul className="space-y-3">
          {filteredUsers.map((user) => (
            <li key={user.id} className="p-4 border rounded-md">
              <div className="flex justify-between">
                <p className="font-bold">{user.name}</p>
                <p>{user.email}</p>
              </div>
              <p className="text-sm italic text-gray-300">{user.role}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
