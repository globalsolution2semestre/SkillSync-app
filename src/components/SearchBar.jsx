function SearchBar({ searchTerm, onSearchChange, darkMode }) {
  return (
    <div className="mb-6">
      <div className={`relative max-w-2xl mx-auto ${
        darkMode ? 'text-white' : 'text-gray-900'
      }`}>
        <input
          type="text"
          placeholder="Buscar por nome ou cargo..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-colors ${
            darkMode 
              ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-purple-500' 
              : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-400'
          } focus:outline-none focus:ring-2 ${
            darkMode ? 'focus:ring-purple-600' : 'focus:ring-purple-300'
          }`}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SearchBar