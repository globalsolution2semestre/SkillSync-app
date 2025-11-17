function ProfessionalCard({ professional, darkMode, onViewProfile, onMessage }) {
  return (
    <div className={`rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg ${
      darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
    }`}>
      <div className="flex items-center mb-4">
        <img
          src={professional.foto}
          alt={professional.nome}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div className="flex-1">
          <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {professional.nome}
          </h3>
          <p className={`text-sm ${darkMode ? 'text-purple-400' : 'text-purple-700 font-medium'}`}>
            {professional.cargo}
          </p>
        </div>
      </div>
      <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-6`}>
        {professional.resumo}
      </p>
      <div className="mt-3 flex items-center gap-2 mb-3">
        <span className={`px-2 py-1 rounded text-xs ${
          darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-50 text-purple-800'
        }`}>
          {professional.area}
        </span>
        <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {professional.localizacao}
        </span>
      </div>
      <div className="flex flex-wrap gap-1 mb-4">
        {professional.habilidadesTecnicas.slice(0, 3).map((skill, index) => (
          <span
            key={index}
            className={`px-2 py-1 rounded text-xs ${
              darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
            }`}
          >
            {skill}
          </span>
        ))}
        {professional.habilidadesTecnicas.length > 3 && (
          <span className={`px-2 py-1 rounded text-xs ${
            darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
          }`}>
            +{professional.habilidadesTecnicas.length - 3}
          </span>
        )}
      </div>
      
      
      <div className="flex gap-2">
        <button
          onClick={onViewProfile}
          className={`flex-1 py-2 px-3 rounded text-sm font-medium transition-colors ${
            darkMode 
              ? 'bg-purple-600 hover:bg-purple-700 text-white' 
              : 'bg-purple-600 hover:bg-purple-700 text-white'
          }`}
        >
          Ver Perfil
        </button>
        <button
          onClick={() => onMessage && onMessage(professional.id)}
          className={`flex-1 py-2 px-3 rounded text-sm font-medium border transition-colors ${
            darkMode 
              ? 'border-purple-400 text-purple-400 hover:bg-purple-900' 
              : 'border-purple-600 text-purple-600 hover:bg-purple-50'
          }`}
        >
          Conectar
        </button>
      </div>
    </div>
  )
}

export default ProfessionalCard