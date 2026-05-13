import { Search, RotateCcw, Plus, FileUp, Edit2, Trash2 } from "lucide-react";

export function CustomerTable() {
  return (
    <div className="space-y-4">
      {/* Search & Actions Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-end gap-4">
        {/* Filter Group: Customer Code */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-0.5">
            Customer Code
          </label>
          <input
            type="text"
            className="h-9 w-full md:w-40 rounded-md border border-slate-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all"
            placeholder="e.g. AGCT"
          />
        </div>

        {/* Filter Group: Customer Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider ml-0.5">
            Customer Name
          </label>
          <select className="h-9 w-full md:w-64 rounded-md border border-slate-200 px-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent/20">
            <option>ALL</option>
            <option>ARGELITH CERAMIC TILES INC</option>
            <option>AIRCITY</option>
          </select>
        </div>

        <button className="h-9 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
          <Search className="size-4" /> Search
        </button>
        <button className="h-9 px-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md text-sm font-medium flex items-center gap-2 transition-colors">
          <RotateCcw className="size-4" /> Clear
        </button>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 ml-auto w-full md:w-auto">
          <div className="h-6 w-px " />
          <button className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium flex items-center gap-2">
            <Plus className="size-4" /> Add Customer
          </button>
          <button className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium flex items-center gap-2">
            <FileUp className="size-4" /> Import CSV
          </button>
        </div>
      </div>

      {/* Compact Data Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-200">
              <th className="px-4 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Code
              </th>
              <th className="px-4 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Customer Name
              </th>
              <th className="px-4 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Email Contact
              </th>
              <th className="px-4 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-4 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider text-center w-24">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {/* Sample Row */}
            <tr className="hover:bg-slate-50/80 transition-colors group">
              <td className="px-4 py-3 text-sm font-medium text-slate-700 uppercase">AGCT</td>
              <td className="px-4 py-3 text-sm text-slate-600">ARGELITH CERAMIC TILES INC</td>
              <td className="px-4 py-3 text-sm text-slate-500 font-mono text-[13px]">
                christian@argelithusa...
              </td>
              <td className="px-4 py-3 text-sm text-slate-500">(630) 444-0665</td>
              <td className="px-4 py-3 text-center">
                <div className="flex items-center justify-center gap-1">
                  <button
                    className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    title="Edit"
                  >
                    <Edit2 className="size-3.5" />
                  </button>
                  <button
                    className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-md transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
              </td>
            </tr>
            {/* Repeat rows here */}
          </tbody>
        </table>

        {/* Pagination Footer */}
        <div className="px-4 py-3 bg-slate-50/30 border-t border-slate-200 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Showing <span className="font-medium">1 - 50</span> of 109 items
          </p>
          <div className="flex gap-1">
            {[1, 2, 3].map((n) => (
              <button
                key={n}
                className={`size-8 flex items-center justify-center rounded-md text-xs font-medium transition-all ${n === 1 ? "bg-brand-accent text-white shadow-sm" : "hover:bg-white border border-transparent hover:border-slate-200 text-slate-600"}`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
