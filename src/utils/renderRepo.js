// src/utils/renderRepo.ts
export function renderRepositoryCard(repo, orgId) {
  // Link to the signals page with pre-filled search by repository
const signalsUrl = `/signals?org_id=${orgId}&search=${encodeURIComponent('repo:' + repo.full_name)}`;

  const repoTypeStyle = repo.is_private ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' : 'bg-blue-500/10 text-blue-500 border-blue-500/20';

  return `
    <div class="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all group">
      <div class="flex justify-between items-start mb-4">
        <div class="p-2 bg-blue-500/10 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
        </div>
        <span class="text-[10px] font-bold  uppercase tracking-widest px-2 py-1 rounded border ${repoTypeStyle} ">
          ${repo.is_private ? 'Private' : 'Public'}
        </span>
      </div>
      
      <h3 class="text-lg font-bold text-white mb-1 truncate" title="${repo.full_name}">
        ${repo.full_name.split('/')[1]}
      </h3>
      <p class="text-xs text-slate-500 mb-6 font-mono">${repo.full_name.split('/')[0]}</p>
      
      <div class="flex gap-2">
        <a href="${signalsUrl}" class="flex-1 text-center bg-slate-950 border border-slate-800 hover:border-blue-500/50 text-white text-[10px] font-bold uppercase py-2 rounded-md transition-colors">
          View Signals
        </a>
        <a href="${repo.html_url}" target="_blank" class="px-3 bg-slate-950 border border-slate-800 hover:border-slate-600 text-slate-400 py-2 rounded-md transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  `;
}