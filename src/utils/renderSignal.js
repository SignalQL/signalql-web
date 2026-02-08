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

  return `
    <tr class="border-b border-slate-800 hover:bg-slate-800/50 transition-colors">
      <td class="py-4 px-4">
        <span class="text-[10px] font-bold px-2 py-1 rounded border ${severityColors[signal.severity] || severityColors.INFO}">
          ${signal.severity}
        </span>
      </td>
      <td class="py-4 px-4">
        <div class="flex flex-col">
          <span class="text-sm font-semibold text-slate-100">${signal.title}</span>
          <span class="text-xs text-slate-500 font-mono truncate max-w-xs">${signal.file_path || 'Multiple files'}:${signal.line_start || ''}</span>
        </div>
      </td>
      <td class="py-4 px-4 text-xs text-slate-400">
        <span class="bg-slate-900 px-2 py-1 rounded border border-slate-700">${signal.signal_type}</span>
      </td>
      <td class="py-4 px-4 text-xs text-slate-300">${date}</td>
      <td class="py-4 px-4 text-right">
        <button class="text-slate-500 hover:text-white transition-colors">View Details</button>
      </td>
    </tr>
  `;
}