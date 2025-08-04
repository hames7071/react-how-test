import React from "react";

export default function PersonalProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full text-center">
        <img
          className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500"
          src="https://via.placeholder.com/150"
          alt="Profile"
        />
        <h1 className="text-2xl font-bold mt-4">Hem Chand</h1>
        <p className="text-gray-600 mt-2">Aspiring Agri-Tech Innovator | Student of BSc Agriculture</p>

        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <p>📍 Nepal</p>
          <p>🎓 BSc in Agriculture</p>
          <p>🌱 Interested in Digital Agriculture, Ecology, and Social Innovation</p>
        </div>

        <div className="mt-6 flex justify-center space-x-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="mailto:your-email@example.com">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}
