import { createFileRoute } from "@tanstack/react-router";
import {
  LayoutDashboard,
  MonitorPlay,
  Database,
  Package,
  PackagePlus,
  PackageMinus,
  Boxes,
  BarChart3,
  Receipt,
  Settings,
  Menu,
  Bell,
  Search,
  ChevronDown,
  ArrowRight,
  Truck,
  ArrowDownToLine,
  ArrowUpFromLine,
  Wrench,
  ClipboardList,
  FileText,
  KeyRound,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: "Dashboard · Resources WMS" },
      { name: "description", content: "Pallet warehouse management system dashboard" },
    ],
  }),
});

const navMain = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "On Board Dashboard", icon: MonitorPlay },
];

const navManagement = [
  { label: "Master Data", icon: Database },
  { label: "Items", icon: Package },
  { label: "InBound", icon: PackagePlus },
  { label: "OutBound", icon: PackageMinus },
  { label: "Inventory", icon: Boxes },
];

const navBusiness = [
  { label: "Reports", icon: BarChart3 },
  { label: "Invoicing", icon: Receipt },
];

const navSystem = [{ label: "Settings", icon: Settings }];

const tiles = [
  {
    label: "Shipping Orders",
    desc: "Manage outgoing deliveries and logistics.",
    icon: Truck,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    label: "Receiving",
    desc: "Handle incoming stock and dock arrivals.",
    icon: ArrowDownToLine,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Outbound",
    desc: "Staging and dispatch for carrier pickup.",
    icon: ArrowUpFromLine,
    tone: "bg-indigo-50 text-indigo-600",
  },
  {
    label: "Services",
    desc: "WMS configuration and utility tools.",
    icon: Wrench,
    tone: "bg-amber-50 text-amber-600",
  },
  {
    label: "Inventory Items",
    desc: "SKU master list and stock levels.",
    icon: ClipboardList,
    tone: "bg-slate-100 text-slate-600",
  },
  {
    label: "Invoices",
    desc: "Billing history and payment status.",
    icon: FileText,
    tone: "bg-rose-50 text-rose-600",
  },
  {
    label: "Reports",
    desc: "Analytical data and KPI visualizations.",
    icon: BarChart3,
    tone: "bg-violet-50 text-violet-600",
  },
  {
    label: "Security",
    desc: "Update passwords and access levels.",
    icon: KeyRound,
    tone: "bg-slate-100 text-slate-600",
  },
];

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="hidden md:flex w-64 bg-white border-r border-slate-200 text-slate-700 flex-col shrink-0">
        <div className="p-6 flex items-center gap-3">
          <div className="size-9 bg-brand-accent rounded-md flex items-center justify-center font-bold text-white">
            R
          </div>
          <div>
            <h1 className="text-slate-900 font-bold text-lg leading-tight">Resources</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider">
              Pallet WMS Product
            </p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-2 overflow-y-auto">
          {navMain.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}

          <SectionLabel>Management</SectionLabel>
          {navManagement.map((item) => (
            <NavItem key={item.label} {...item} chevron />
          ))}

          <SectionLabel>Business</SectionLabel>
          {navBusiness.map((item) => (
            <NavItem key={item.label} {...item} chevron />
          ))}

          <SectionLabel>System</SectionLabel>
          {navSystem.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </nav>

        <div className="p-4 mt-auto border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-brand-primary grid place-items-center text-xs font-semibold text-white">
              AD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-slate-900 truncate">Admin User</p>
              <p className="text-[10px] text-slate-500 truncate">Super Admin</p>
            </div>
            <ChevronDown className="size-4 text-slate-400" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-4">
            <button className="size-9 grid place-items-center rounded-md hover:bg-slate-100 text-slate-600">
              <Menu className="size-4" />
            </button>
            <h2 className="font-semibold text-lg text-slate-800">Dashboard Overview</h2>
          </div>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium">System Live</span>
            </div>
            <button className="hidden sm:grid size-10 place-items-center rounded-full hover:bg-slate-100 text-slate-600">
              <Search className="size-4" />
            </button>
            <button className="relative grid size-10 place-items-center rounded-full hover:bg-slate-100 text-slate-600">
              <Bell className="size-4" />
              <span className="absolute top-2 right-2 size-2 rounded-full bg-rose-500" />
            </button>
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-200">
              <div className="size-8 rounded-full bg-brand-primary text-white grid place-items-center text-xs font-semibold">
                AD
              </div>
              <ChevronDown className="size-4 text-slate-500" />
            </div>
          </div>
        </header>

        <div className="p-4 md:p-8 overflow-y-auto">
          {/* Module Grid */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                Operation Hub
              </h3>
              <button className="text-xs font-medium text-brand-accent hover:underline flex items-center gap-1">
                Customize <ArrowRight className="size-3" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {tiles.map((tile) => (
                <ModuleTile key={tile.label} {...tile} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-5 pb-2 px-3 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
      {children}
    </div>
  );
}

function NavItem({
  label,
  icon: Icon,
  active,
  chevron,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  chevron?: boolean;
}) {
  return (
    <a
      href="#"
      className={
        "flex items-center justify-between gap-3 px-3 py-2 rounded-md transition-colors " +
        (active
          ? "bg-brand-accent-soft text-brand-accent"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900")
      }
    >
      <span className="flex items-center gap-3">
        <Icon className="size-4" />
        <span className="text-sm font-medium">{label}</span>
      </span>
      {chevron && <ArrowRight className="size-3 opacity-30" />}
    </a>
  );
}

function ModuleTile({
  label,
  desc,
  icon: Icon,
  tone,
}: {
  label: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  tone: string;
}) {
  return (
    <button className="flex flex-col items-start p-5 bg-white border border-slate-200 rounded-xl hover:border-brand-accent hover:shadow-lg transition-all text-left group">
      <div
        className={
          "size-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform " +
          tone
        }
      >
        <Icon className="size-6" />
      </div>
      <p className="font-semibold text-slate-800">{label}</p>
      <p className="text-xs text-slate-500 mt-1 leading-relaxed">{desc}</p>
    </button>
  );
}
