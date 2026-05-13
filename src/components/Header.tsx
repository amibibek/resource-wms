import { Menu, Search, Bell, ChevronDown } from "lucide-react";

interface HeaderProps {
  title: string; // Add this line
  onToggleMobile: () => void;
  onToggleDesktop: () => void;
}

export function Header({ title, onToggleMobile, onToggleDesktop }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-4 shrink-0">
      <div className="flex items-center gap-4">
        {/* Mobile Toggle */}
        <button
          className="md:hidden size-9 grid place-items-center rounded-md hover:bg-slate-100 text-slate-600"
          onClick={onToggleMobile}
        >
          <Menu className="size-4" />
        </button>
        {/* Desktop Toggle */}
        <button
          className="hidden md:grid size-9 place-items-center rounded-md hover:bg-slate-100 text-slate-600"
          onClick={onToggleDesktop}
        >
          <Menu className="size-4" />
        </button>

        {/* Dynamic Title */}
        <h2 className="font-semibold text-lg text-slate-800">{title}</h2>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        {/* System Status - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-medium">System Live</span>
        </div>

        {/* Notification Bell */}
        <button className="relative grid size-10 place-items-center rounded-full hover:bg-slate-100 text-slate-600">
          <Bell className="size-4" />
          <span className="absolute top-2 right-2 size-2 rounded-full bg-rose-500" />
        </button>

        {/* User Profile Icon - Added on the right */}
        <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
          <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="size-8 rounded-full bg-brand-primary text-white grid place-items-center text-xs font-semibold">
              AD
            </div>
            <ChevronDown className="size-4 text-slate-500 hidden sm:block" />
          </button>
        </div>
      </div>
    </header>
  );
}
