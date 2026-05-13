import {
  Truck,
  ArrowDownToLine,
  ArrowUpFromLine,
  Wrench,
  ClipboardList,
  FileText,
  BarChart3,
  KeyRound,
} from "lucide-react";

const tiles = [
  { label: "Shipping Orders", value: "12", icon: Truck, tone: "bg-blue-50 text-blue-600" },
  { label: "Receiving", value: "5", icon: ArrowDownToLine, tone: "bg-emerald-50 text-emerald-600" },
  { label: "Outbound", value: "8", icon: ArrowUpFromLine, tone: "bg-indigo-50 text-indigo-600" },
  { label: "Services", value: "Active", icon: Wrench, tone: "bg-amber-50 text-amber-600" },
  {
    label: "Inventory Items",
    value: "1,240",
    icon: ClipboardList,
    tone: "bg-slate-100 text-slate-600",
  },
  { label: "Invoices", value: "24", icon: FileText, tone: "bg-rose-50 text-rose-600" },
  { label: "Reports", value: "Analytics", icon: BarChart3, tone: "bg-violet-50 text-violet-600" },
  { label: "Security", value: "Secure", icon: KeyRound, tone: "bg-slate-100 text-slate-600" },
];

export function ModuleGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {tiles.map((tile) => (
        <button
          key={tile.label}
          className="flex flex-col items-start p-5 bg-white border border-slate-200 rounded-md   text-left group"
        >
          {/* Top Row: Metric Value and Icon */}
          <div className="w-full flex items-start justify-between mb-0">
            <span className="text-2xl font-medium text-slate-900 tracking-tight leading-none">
              {tile.value}
            </span>
            <div className={`p-2 rounded-md  ${tile.tone}`}>
              <tile.icon className="size-5" />
            </div>
          </div>

          {/* Bottom Row: Label */}
          <p className="text-xs  transition-colors">{tile.label}</p>
        </button>
      ))}
    </div>
  );
}
