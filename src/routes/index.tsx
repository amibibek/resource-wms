import { useState } from "react";
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
    // desc: "Manage outgoing deliveries and logistics.",
    icon: Truck,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    label: "Receiving",
    // desc: "Handle incoming stock and dock arrivals.",
    icon: ArrowDownToLine,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    label: "Outbound",
    // desc: "Staging and dispatch for carrier pickup.",
    icon: ArrowUpFromLine,
    tone: "bg-indigo-50 text-indigo-600",
  },
  {
    label: "Services",
    // desc: "WMS configuration and utility tools.",
    icon: Wrench,
    tone: "bg-amber-50 text-amber-600",
  },
  {
    label: "Inventory Items",
    // desc: "SKU master list and stock levels.",
    icon: ClipboardList,
    tone: "bg-slate-100 text-slate-600",
  },
  {
    label: "Invoices",
    // desc: "Billing history and payment status.",
    icon: FileText,
    tone: "bg-rose-50 text-rose-600",
  },
  {
    label: "Reports",
    // desc: "Analytical data and KPI visualizations.",
    icon: BarChart3,
    tone: "bg-violet-50 text-violet-600",
  },
  {
    label: "Security",
    // desc: "Update passwords and access levels.",
    icon: KeyRound,
    tone: "bg-slate-100 text-slate-600",
  },
];

function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-background font-sans text-slate-900 overflow-hidden">
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 flex flex-col shrink-0 bg-white border-r border-slate-200 text-slate-700 transition-all duration-300 ease-in-out
        ${isCollapsed ? "md:w-20" : "md:w-64"} 
        w-64 md:w-auto
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className={`p-6 flex items-center ${isCollapsed ? "md:justify-center" : "gap-3"}`}>
          <div className="size-9 bg-brand-accent rounded-md flex items-center justify-center font-bold text-white shrink-0">
            R
          </div>
          <div
            className={`min-w-0 transition-all duration-300 ${
              isCollapsed ? "md:w-0 md:opacity-0 overflow-hidden" : "w-auto opacity-100"
            }`}
          >
            <h1 className="text-slate-900 font-bold text-lg leading-tight truncate">Resources</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider truncate">
              Pallet WMS Product
            </p>
          </div>
        </div>

        <nav className="flex-1 px-3 space-y-1 mt-2 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {navMain.map((item) => (
            <NavItem key={item.label} {...item} isCollapsed={isCollapsed} />
          ))}

          <SectionLabel isCollapsed={isCollapsed}>Management</SectionLabel>
          {navManagement.map((item) => (
            <NavItem key={item.label} {...item} chevron isCollapsed={isCollapsed} />
          ))}

          <SectionLabel isCollapsed={isCollapsed}>Business</SectionLabel>
          {navBusiness.map((item) => (
            <NavItem key={item.label} {...item} chevron isCollapsed={isCollapsed} />
          ))}

          <SectionLabel isCollapsed={isCollapsed}>System</SectionLabel>
          {navSystem.map((item) => (
            <NavItem key={item.label} {...item} isCollapsed={isCollapsed} />
          ))}
        </nav>

        <div
          className={`p-4 mt-auto border-t border-slate-200 flex items-center ${
            isCollapsed ? "md:justify-center" : "justify-between"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-full bg-brand-primary grid place-items-center text-xs font-semibold text-white shrink-0">
              AD
            </div>
            <div
              className={`min-w-0 transition-all duration-300 ${
                isCollapsed ? "md:w-0 md:opacity-0 md:hidden" : "block"
              }`}
            >
              <p className="text-xs font-medium text-slate-900 truncate">Admin User</p>
              <p className="text-[10px] text-slate-500 truncate">Super Admin</p>
            </div>
          </div>
          <ChevronDown
            className={`size-4 text-slate-400 shrink-0 ${isCollapsed ? "md:hidden" : "block"}`}
          />
        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 shrink-0">
          <div className="flex items-center gap-4">
            {/* Mobile Toggle */}
            <button
              className="md:hidden size-9 grid place-items-center rounded-md hover:bg-slate-100 text-slate-600"
              onClick={() => setIsMobileOpen(true)}
            >
              <Menu className="size-4" />
            </button>
            {/* Desktop Toggle */}
            <button
              className="hidden md:grid size-9 place-items-center rounded-md hover:bg-slate-100 text-slate-600"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
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

        {/* Scrollable Main Area */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          <section className="mb-8">
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

function SectionLabel({
  children,
  isCollapsed,
}: {
  children: React.ReactNode;
  isCollapsed?: boolean;
}) {
  return (
    <>
      {isCollapsed && <div className="hidden md:block my-4 border-t border-slate-200 mx-2" />}
      <div
        className={`pt-5 pb-2 px-3 text-[10px] font-bold text-slate-700 uppercase tracking-widest whitespace-nowrap ${
          isCollapsed ? "md:hidden" : "block"
        }`}
      >
        {children}
      </div>
    </>
  );
}

function NavItem({
  label,
  icon: Icon,
  active,
  chevron,
  isCollapsed,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
  chevron?: boolean;
  isCollapsed?: boolean;
}) {
  return (
    <a
      href="#"
      title={label}
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors group ${
        active
          ? "bg-brand-accent-soft text-brand-accent"
          : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
      } ${isCollapsed ? "md:justify-center" : "justify-between"}`}
    >
      <span className={`flex items-center ${isCollapsed ? "md:gap-0" : "gap-3"}`}>
        <Icon className="size-5 shrink-0" />
        <span
          className={`text-sm font-medium whitespace-nowrap transition-all duration-300 ${
            isCollapsed ? "md:w-0 md:opacity-0 md:overflow-hidden" : "w-auto opacity-100"
          }`}
        >
          {label}
        </span>
      </span>
      {chevron && (
        <ArrowRight
          className={`size-3 opacity-30 shrink-0 transition-all duration-300 ${
            isCollapsed ? "md:hidden md:w-0 md:opacity-0" : "block"
          }`}
        />
      )}
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
  desc?: string;
  icon: React.ComponentType<{ className?: string }>;
  tone: string;
}) {
  return (
    <button className="flex flex-col items-start p-5 bg-white border border-slate-200 rounded-xl hover:border-brand-accent hover:shadow-lg transition-all text-left group">
      <div
        className={`size-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${tone}`}
      >
        <Icon className="size-6" />
      </div>
      <p className="font-semibold text-slate-800">{label}</p>
      {desc && <p className="text-xs text-slate-500 mt-1 leading-relaxed">{desc}</p>}
    </button>
  );
}
