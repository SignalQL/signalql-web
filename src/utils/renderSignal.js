import { SeverityColors } from './constants';
export function renderSignalRow(signal) {

  const sev = (signal.severity || 'INFO').toUpperCase();
  const colorClass = SeverityColors[sev] || SeverityColors.INFO;

  let dateStr = '---';
  try {
    const rawDate = signal.detected_at;
    const dateObj = new Date(rawDate.includes(' ') ? rawDate.replace(' ', 'T') : rawDate);
    dateStr = dateObj.toISOString().replace('T', ' ').substring(0, 16);
  } catch (e) { console.error(e); }

  return `
    <tr class="border-b border-slate-900 hover:bg-slate-900/40 transition-colors font-mono group text-[11px]">
      <td class="py-3 px-2 text-center">
        <span class="inline-block w-full text-[9px] font-bold py-0.5 rounded border ${colorClass} uppercase tracking-tighter">
          ${sev === 'CRITICAL' ? 'CRIT' : sev}
        </span>
      </td>

      <td class="py-3 px-4">
        <div class="flex flex-col gap-0.5">
          <div class="flex items-center gap-2">
              <span class="text-[8px] text-blue-500 font-bold bg-blue-500/5 px-1 border border-blue-500/20 rounded-sm uppercase">
                ${signal.repository_name || 'repo'}
              </span>
              <span class="font-bold text-slate-200 tracking-tight">
                ${signal.title}
              </span>
          </div>
          <span class="text-[9px] text-slate-600 truncate max-w-xs opacity-70">
            ${signal.file_path || 'system'}${signal.line_start ? `:L${signal.line_start}` : ''}
          </span>
        </div>
      </td>

      <td class="py-3 px-4">
        <div class="flex items-center gap-2">          
        <span class="text-[9px] text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800 uppercase">
          <a href="${signal.html_url || '#'}" target="_blank" >${signal.signal_type || 'scanner'} ↗</a>
        </span>          
        </div>
      </td>

      <td class="py-3 px-4">
        <div class="flex flex-col leading-tight">
          <span class="text-slate-300 tracking-tighter">${dateStr}</span>
          <span class="text-[8px] text-slate-600">UTC${(new Date().getTimezoneOffset() / -60 >= 0 ? '+' : '') + (new Date().getTimezoneOffset() / -60)}</span>
        </div>
      </td>

      <td class="py-3 px-4 text-right">
        <button 
          onclick="window.openSignalDetails('${signal.id}')"
          class="inline-block text-slate-700 hover:text-blue-500 transition-transform group-hover:translate-x-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </td>
    </tr>
  `;
}