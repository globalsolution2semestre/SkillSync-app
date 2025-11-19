import React, { useState } from 'react';
import jobsSample from '../data/jobs_sample.json';

// Versão simples: usa apenas dados locais (mock) para testes.
export default function JobSearch({ darkMode }) {
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState(jobsSample || []);
  const [loading, setLoading] = useState(false);

  const doSearch = (e) => {
    e && e.preventDefault();
    setLoading(true);

    const q = query.trim().toLowerCase();
    if (!q) {
      setJobs(jobsSample);
      setLoading(false);
      return;
    }

    const filtered = jobsSample.filter(j => (
      (j.title || '').toLowerCase().includes(q) ||
      (j.company || '').toLowerCase().includes(q) ||
      (j.location || '').toLowerCase().includes(q) ||
      (j.snippet || '').toLowerCase().includes(q)
    ));

    setJobs(filtered);
    setLoading(false);
  };

  return (
    <div className={`pt-24 pb-20 px-4 md:px-8 min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Vagas</h2>
        <p className={`text-center mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Protótipo: usa dados locais por padrão.</p>

        <form onSubmit={doSearch} className="flex gap-3 mb-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar vagas por título, empresa ou cidade (ex.: Desenvolvedor React, São Paulo)"
            className={`flex-grow p-3 rounded-lg border ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'}`}
          />
          <button type="submit" className="px-6 py-3 bg-purple-600 text-white rounded-lg">Buscar</button>
        </form>

        {loading ? (
          <div className="text-center py-20">Carregando...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {jobs.map(job => {
              const linkedInUrl = `https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(job.title || '')}&location=${encodeURIComponent(job.location || '')}`;
              return (
              <a key={job.id} href={linkedInUrl} target="_blank" rel="noreferrer" className={`p-4 rounded-lg shadow ${darkMode ? 'bg-gray-800' : 'bg-white'} hover:shadow-lg transition` }>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{job.title}</h3>
                    <div className="text-sm text-gray-400">{job.company} • {job.location}</div>
                  </div>
                  {job.salary_min || job.salary_max ? (
                    <div className="text-right text-sm font-semibold text-green-500">
                      {job.salary_min ? `R$ ${job.salary_min}` : ''}{job.salary_min && job.salary_max ? ' - ' : ''}{job.salary_max ? `R$ ${job.salary_max}` : ''}
                    </div>
                  ) : null}
                </div>
                <p className="mt-3 text-sm text-gray-400 line-clamp-3">{job.snippet}</p>
              </a>
              );
            })}
          </div>
        )}

        <div className="mt-8 text-sm text-gray-500">
        </div>
      </div>
    </div>
  );
}
