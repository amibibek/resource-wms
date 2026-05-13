import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
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
  ChevronRight,
  X,
} from "lucide-react";

interface SidebarProps {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

const navSections = [
  {
    label: "Main",
    items: [
      { label: "Dashboard", icon: LayoutDashboard, to: "/dashboard" },
      { label: "On Board Dashboard", icon: MonitorPlay, to: "/on-board" },
    ],
  },
  {
    label: "Management",
    items: [
      {
        label: "Master Data",
        icon: Database,
        subItems: [
          { label: "Customer", href: "/customers" },
          { label: "Consignee", href: "/consignee" },
          { label: "Messages", href: "/messages" },
          { label: "Carrier", href: "/carrier" },
          { label: "Shipper", href: "/shipper" },
          { label: "Accessorials & Services", href: "/services" },
          { label: "Vendor Specific Price", href: "/pricing" },
          { label: "Location", href: "/location" },
          { label: "LOT", href: "/lot" },
          { label: "Notes", href: "/notes" },
        ],
      },
      { label: "Items", icon: Package, chevron: true, to: "/items" },
      { label: "InBound", icon: PackagePlus, chevron: true, to: "/inbound" },
      { label: "OutBound", icon: PackageMinus, chevron: true, to: "/outbound" },
      { label: "Inventory", icon: Boxes, chevron: true, to: "/inventory" },
    ],
  },
  {
    label: "Business",
    items: [
      { label: "Reports", icon: BarChart3, chevron: true, to: "/reports" },
      { label: "Invoicing", icon: Receipt, chevron: true, to: "/invoicing" },
    ],
  },
  { label: "System", items: [{ label: "Settings", icon: Settings, to: "/settings" }] },
];

export function Sidebar({ isCollapsed, isMobileOpen, setIsMobileOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed md:static inset-y-0 left-0 z-50 flex flex-col shrink-0 bg-white border-r border-slate-200 text-slate-700 transition-all duration-300 ease-in-out
      ${isCollapsed ? "md:w-20" : "md:w-64"} w-64 md:w-auto
      ${isMobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Header */}
        <div
          className={`p-6 flex items-center justify-between ${
            isCollapsed ? "md:justify-center" : "gap-3"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="size-9 bg-brand-accent rounded-md flex items-center justify-center font-bold text-white shrink-0">
              R
            </div>

            {!isCollapsed && (
              <div className="min-w-0">
                <h1 className="text-slate-900 font-bold text-lg leading-tight truncate">
                  Resources
                </h1>
                <p className="text-[10px] text-slate-600 uppercase tracking-wider truncate">
                  Pallet WMS Product
                </p>
              </div>
            )}
          </div>

          {/* Mobile Close Button */}
          <button
            onClick={() => setIsMobileOpen(false)}
            className="md:hidden p-1 rounded-md hover:bg-slate-100"
          >
            <X className="size-5 text-slate-600" />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1 mt-2 overflow-y-auto custom-scrollbar">
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

        <div
          className={`p-4 mt-auto border-t border-slate-200 flex items-center ${
            isCollapsed ? "md:justify-center" : "justify-between"
          }`}
        >
          <div className="flex items-center gap-3 ">
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
    </>
  );
}

function SectionLabel({
  children,
  isCollapsed,
}: {
  children: React.ReactNode;
  isCollapsed: boolean;
}) {
  if (isCollapsed) return <div className="hidden md:block my-4 border-t border-slate-200 mx-2" />;
  return (
    <div className="pt-5 pb-2 px-3 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
      {children}
    </div>
  );
}

function NavItem({ label, icon: Icon, chevron, isCollapsed, subItems, to }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current URL path

  const hasSubmenu = subItems && subItems.length > 0;
  const isExpanded = isOpen && !isCollapsed;

  // STRICT MANUAL ACTIVE CHECK:
  // Returns true if current URL matches the 'to' prop
  const isActive = to ? location.pathname === to : false;

  const NavContent = () => (
    <div
      onClick={() => hasSubmenu && setIsOpen(!isOpen)}
      className={`w-full flex items-center px-3 py-2 rounded-md transition-colors group cursor-pointer outline-none ${
        isActive
          ? "bg-brand-accent-soft text-blue-600"
          : "text-slate-800 hover:bg-slate-100 hover:text-slate-900"
      } ${isCollapsed ? "justify-center" : "justify-between"}`}
    >
      <span className={`flex items-center  ${isCollapsed ? "md:gap-0" : "gap-3"}`}>
        <Icon className="size-5 shrink-0" />
        {!isCollapsed && <span className="text-xs font-medium whitespace-nowrap">{label}</span>}
      </span>

      {!isCollapsed && (hasSubmenu || chevron) && (
        <ChevronRight
          className={`size-3 opacity-40 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
        />
      )}
    </div>
  );

  return (
    <div className="w-full">
      {to ? (
        <Link to={to} className="block no-underline">
          <NavContent />
        </Link>
      ) : (
        <NavContent />
      )}

      {isExpanded && hasSubmenu && (
        <div className="mt-1 ml-[1.125rem] flex flex-col border-l border-slate-200 pl-4 space-y-0.5">
          {subItems.map((sub: any) => {
            // Manual check for sub-items
            const isSubActive = location.pathname === sub.href;

            return (
              <Link
                key={sub.label}
                to={sub.href}
                className={`relative py-1.5 text-[12px] transition-colors truncate block group/sub ${
                  isSubActive
                    ? "text-slate-900 font-semibold"
                    : "text-slate-700 hover:text-slate-900 font-normal"
                }`}
              >
                {/* Active/Hover Dot */}
                <span
                  className={`absolute -left-[17px] top-1/2 -translate-y-1/2 size-1 rounded-full bg-brand-accent transition-opacity ${
                    isSubActive ? "opacity-100" : "opacity-0 group-hover/sub:opacity-100"
                  }`}
                />
                {sub.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
