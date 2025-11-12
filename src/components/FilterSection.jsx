import { useState } from 'react'

function FilterSection({ filters, onFiltersChange, professionals, darkMode }) {
  const [isOpen, setIsOpen] = useState(false)
  

  const areas = [...new Set(professionals.map(p => p.area))]
  const cidades = [...new Set(professionals.map(p => p.localizacao.split('/')[0]))]
  const tecnologias = [...new Set(professionals.flatMap(p => p.habilidadesTecnicas))]

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        
        <select
          value={filters.area}
          onChange={(e) => onFiltersChange({ ...filters, area: e.target.value })}
          className={`px-4 py-2 rounded-lg border transition-colors ${
            darkMode 
              ? 'bg-gray-800 border-gray-700 text-white' 
              : 'bg-white border-gray-300 text-gray-900'
          } focus:outline-none focus:ring-2 ${
            darkMode ? 'focus:ring-purple-600' : 'focus:ring-purple-300'
          }`}
        >
          <option value="">Todas as áreas</option>
          {areas.map(area => (
            <option key={area} value={area}>{area}</option>
          ))}
        </select>

        
        <select
          value={filters.cidade}
          onChange={(e) => onFiltersChange({ ...filters, cidade: e.target.value })}
          className={`px-4 py-2 rounded-lg border transition-colors ${
            darkMode 
              ? 'bg-gray-800 border-gray-700 text-white' 
              : 'bg-white border-gray-300 text-gray-900'
          } focus:outline-none focus:ring-2 ${
            darkMode ? 'focus:ring-purple-600' : 'focus:ring-purple-300'
          }`}
        >
          <option value="">Todas as cidades</option>
          {cidades.map(cidade => (
            <option key={cidade} value={cidade}>{cidade}</option>
          ))}
        </select>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`px-4 py-2 rounded-lg border transition-colors ${
            darkMode 
              ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
              : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-50'
          }`}
        >
          Mais Filtros
        </button>
      </div>

      
      {isOpen && (
        <div className={`mt-4 p-4 rounded-lg ${
          darkMode ? 'bg-gray-800' : 'bg-gray-100'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Tecnologia
              </label>
              <select
                value={filters.tecnologia}
                onChange={(e) => onFiltersChange({ ...filters, tecnologia: e.target.value })}
                className={`w-full px-3 py-2 rounded border transition-colors ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              >
                <option value="">Todas as tecnologias</option>
                {tecnologias.map(tech => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FilterSection