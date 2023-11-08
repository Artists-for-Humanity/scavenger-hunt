import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pb-96 pt-96 text-center bg-cyan-700">
      <form action="/where-to-handle-form" method="post">
        <div className="mb-1 text-lg font-medium text-white">Welcome to my Scavenger Hunt!</div>
        <input
          type="text"
          name="username"
          placeholder="Enter your name..."
          className="mt-2 p-2"
        />
        <input
          type="submit"
          value="Enter"
          className="mt-4 p-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
        />
      </form>
    </main>
  );
}

