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
  ChevronDown,
  ArrowRight,
} from "lucide-react";

// Types for cleaner props
interface SidebarProps {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

const navSections = [
  {
    label: "Main",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, active: true },
      { label: "On Board Dashboard", icon: MonitorPlay },
    ],
  },
  {
    label: "Management",
    items: [
      { label: "Master Data", icon: Database, chevron: true },
      { label: "Items", icon: Package, chevron: true },
      { label: "InBound", icon: PackagePlus, chevron: true },
      { label: "OutBound", icon: PackageMinus, chevron: true },
      { label: "Inventory", icon: Boxes, chevron: true },
    ],
  },
  {
    label: "Business",
    items: [
      { label: "Reports", icon: BarChart3, chevron: true },
      { label: "Invoicing", icon: Receipt, chevron: true },
    ],
  },
  { label: "System", items: [{ label: "Settings", icon: Settings }] },
];

export function Sidebar({ isCollapsed, isMobileOpen, setIsMobileOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed md:static inset-y-0 left-0 z-50 flex flex-col shrink-0 bg-white border-r border-slate-200 text-slate-700 transition-all duration-300 ease-in-out
        ${isCollapsed ? "md:w-20" : "md:w-64"} w-64 md:w-auto
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
    >
      {/* Brand Logo */}
      <div className={`p-6 flex items-center ${isCollapsed ? "md:justify-center" : "gap-3"}`}>
        <div className="size-9 bg-brand-accent rounded-md flex items-center justify-center font-bold text-white shrink-0">
          R
        </div>
        {!isCollapsed && (
          <div className="min-w-0">
            <h1 className="text-slate-900 font-bold text-lg leading-tight truncate">Resources</h1>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider truncate">
              Pallet WMS Product
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1 mt-2 overflow-y-auto">
        {navSections.map((section) => (
          <div key={section.label}>
            {section.label !== "Main" && (
              <SectionLabel isCollapsed={isCollapsed}>{section.label}</SectionLabel>
            )}
            {section.items.map((item) => (
              <NavItem key={item.label} {...item} isCollapsed={isCollapsed} />
            ))}
          </div>
        ))}
      </nav>

      {/* User Profile */}
      <div
        className={`p-4 mt-auto border-t border-slate-200 flex items-center ${isCollapsed ? "md:justify-center" : "justify-between"}`}
      >
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full bg-brand-primary grid place-items-center text-xs font-semibold text-white shrink-0">
            AD
          </div>
          {!isCollapsed && (
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-900 truncate">Admin User</p>
              <p className="text-[10px] text-slate-500 truncate">Super Admin</p>
            </div>
          )}
        </div>
        {!isCollapsed && <ChevronDown className="size-4 text-slate-400 shrink-0" />}
      </div>
    </aside>
  );
}

// Sub-components kept internal to Sidebar
function SectionLabel({
  children,
  isCollapsed,
}: {
  children: React.ReactNode;
  isCollapsed: boolean;
}) {
  if (isCollapsed) return <div className="hidden md:block my-4 border-t border-slate-200 mx-2" />;
  return (
    <div className="pt-5 pb-2 px-3 text-[10px] font-bold text-slate-700 uppercase tracking-widest">
      {children}
    </div>
  );
}

function NavItem({ label, icon: Icon, active, chevron, isCollapsed }: any) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors group ${active ? "bg-brand-accent-soft text-brand-accent" : "text-slate-800 hover:bg-slate-100 hover:text-slate-900"} ${isCollapsed ? "md:justify-center" : "justify-between"}`}
    >
      <span className={`flex items-center ${isCollapsed ? "md:gap-0" : "gap-3"}`}>
        <Icon className="size-5 shrink-0" />
        {!isCollapsed && <span className="text-xs font-small whitespace-nowrap">{label}</span>}
      </span>
      {chevron && !isCollapsed && <ArrowRight className="size-3 opacity-30 shrink-0" />}
    </a>
  );
}
