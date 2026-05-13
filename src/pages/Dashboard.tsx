import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ModuleGrid } from "../components/DashboardModuleGrid";

export function DashboardPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#e9ecf3] font-sans text-slate-900 overflow-hidden">
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <Sidebar
        isCollapsed={isCollapsed}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <main className="flex-1 flex flex-col min-w-0">
        <Header
          title="Dashboard" // Pass the title here
          onToggleMobile={() => setIsMobileOpen(true)}
          onToggleDesktop={() => setIsCollapsed(!isCollapsed)}
        />

        <div className="flex-1 p-4 md:p-8 overflow-y-auto">
          <ModuleGrid />
        </div>
      </main>
    </div>
  );
}
