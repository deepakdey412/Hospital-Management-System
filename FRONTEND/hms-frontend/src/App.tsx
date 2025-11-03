import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <img
        src="https://images.unsplash.com/photo-1503264116251-35a269479413"
        alt="Nature"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">Beautiful Nature</h2>
        <p className="text-gray-600 mt-2">Experience the serenity of natural landscapes.</p>
        <button className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default App;
