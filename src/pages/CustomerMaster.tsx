import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { CustomerTable } from "../components/CustomerTable";

export function CustomerMasterView() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#e9ecf3] font-sans text-slate-900 overflow-hidden">
      <Sidebar
        isCollapsed={isCollapsed}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <main className="flex-1 flex flex-col min-w-0">
        <Header
          title="Customer Master"
          onToggleMobile={() => setIsMobileOpen(true)}
          onToggleDesktop={() => setIsCollapsed(!isCollapsed)}
        />

        <div className="flex-1 p-4 md:p-6 overflow-y-auto">
          <CustomerTable />
        </div>
      </main>
    </div>
  );
}
