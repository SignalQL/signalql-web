export function renderSignalRow(signal) {
  const severityColors = {
    CRITICAL: 'bg-red-500/10 text-red-500 border-red-500/20',
    HIGH: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
    MEDIUM: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    LOW: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    INFO: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
  };

  // Normalize severity (convert to UPPERCASE, so mapping works)
  const sev = (signal.severity || 'INFO').toUpperCase();
  const colorClass = severityColors[sev] || severityColors.INFO;

  // Safe date parsing
  let dateStr = '---';
  
  try {
    const rawDate = signal.detected_at;
    const dateObj = new Date(rawDate.includes(' ') ? rawDate.replace(' ', 'T') : rawDate);
    // ISO 8601 - "2022-01-01T00:00:00Z" 
    dateStr = dateObj.toISOString().replace('T', ' ').substring(0, 16);
  } catch (e) {
    console.error("Date parsing error:", e);
  }
  return `
    <tr class="border-b border-slate-900 hover:bg-slate-900/40 transition-colors font-mono group">
      <td class="py-3 px-4">
        <span class="text-[9px] font-bold px-2 py-0.5 rounded border ${colorClass} uppercase">
          ${sev}
        </span>
      </td>

      <td class="py-3 px-4">
        <div class="flex flex-col">
          <div class="flex items-center gap-2 mb-0.5">
              <span class="text-[9px] text-blue-500 font-bold bg-blue-500/5 px-1 border border-blue-500/20">
                ${signal.repository_name || 'repo'}
              </span>
              <span class="text-xs font-bold text-slate-200  tracking-tight">
                ${signal.title}
              </span>
          </div>
          <span class="text-[10px] text-slate-600 truncate max-w-md">
            ${signal.file_path || 'system'}${signal.line_start ? `:L${signal.line_start}` : ''}
          </span>
        </div>
      </td>

      <td class="py-3 px-4">
        <span class="text-[10px] text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 uppercase">
          ${signal.signal_type || 'scanner'}
        </span>
        
        <a href="${signal.html_url || '-'}" target="_blank" class="text-[9px] text-blue-500 font-bold bg-blue-500/5 px-1 border border-blue-500/20">link ↗</a>
        
      </td>

      <td class="py-3 px-4">
        <div class="flex flex-col gap-0.5 whitespace-nowrap">
          <span class="text-[10px] text-slate-300 font-mono tracking-tighter">
            ${dateStr}
          </span>
          <span class="text-[8px] text-slate-600 font-mono">
            UTC${(new Date().getTimezoneOffset() / -60 >= 0 ? '+' : '') + (new Date().getTimezoneOffset() / -60)}
          </span>
        </div>
      </td>
      <td class="py-3 px-4 text-right">
        <a href="/signals/${signal.id}" class="inline-block text-slate-700 hover:text-blue-500 transition-transform group-hover:translate-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </td>
    </tr>
  `;
}