export function renderSignalRow(signal) {
  const severityColors = {
    CRITICAL: 'bg-red-500/10 text-red-500 border-red-500/20',
    HIGH: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    MEDIUM: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    LOW: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    INFO: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  };

  const date = new Date(signal.detected_at.replace(' ', 'T')).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });

 // Добавь это в шаблон строки внутри <td> с описанием или отдельной колонкой
return `
  <tr class="border-b border-slate-900 hover:bg-slate-900/30 transition-colors font-mono">
    <td class="py-3 px-4 uppercase text-[9px]">...</td>
    <td class="py-3 px-4">
      <div class="flex flex-col">
        <div class="flex items-center gap-2 mb-0.5">
            <span class="text-[9px] text-blue-500 font-bold bg-blue-500/5 px-1 border border-blue-500/20">${signal.repo_name}</span>
            <span class="text-xs font-bold text-slate-200 uppercase tracking-tight">${signal.title}</span>
        </div>
        <span class="text-[10px] text-slate-600 truncate max-w-md">${signal.file_path || 'system'} : L${signal.line_start || '0'}</span>
      </div>
    </td>
    ...
  </tr>
`;
}