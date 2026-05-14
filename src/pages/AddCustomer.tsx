import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { ChevronRight, Save, X } from "lucide-react";

export function AddCustomerView() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Basic Information");

  const tabs = [
    "Basic Information",
    "Address",
    "Order Configuration",
    "Invoice Configuration",
    "Customer Users",
    "Default Master Configuration",
    "Item Rates",
  ];

  return (
    <div className="flex h-screen bg-[#f8fafc] font-sans text-slate-900 overflow-hidden">
      <Sidebar
        isCollapsed={isCollapsed}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <main className="flex-1 flex flex-col min-w-0">
        <Header
          title="Add New Customer"
          onToggleMobile={() => setIsMobileOpen(true)}
          onToggleDesktop={() => setIsCollapsed(!isCollapsed)}
        />

        <div className="flex-1 p-4 overflow-y-auto">
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Horizontal Tabs */}
            <div className="flex border-b border-slate-200 bg-slate-50/50 overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 text-xs font-regular whitespace-nowrap transition-colors ${
                    activeTab === tab
                      ? "border-b-2 border-blue-600 text-blue-700 bg-white"
                      : "text-slate-700 hover:text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-4">
              {activeTab === "Basic Information" && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column: Form Fields */}
                  <div className="space-y-4">
                    <FormField label="Customer Code" placeholder="Enter Customer Code" />
                    <FormField label="Customer Name" placeholder="Enter Name" />
                    <div className="grid grid-cols-2 gap-4">
                      <FormField label="Email" type="email" placeholder="email@example.com" />
                      <FormField label="Phone" type="tel" placeholder="Phone number" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField label="Contact" placeholder="Contact person" />
                      <FormField label="Contact Phone" placeholder="Contact phone" />
                    </div>
                    <FormField label="Fax" placeholder="Fax number" />
                    <div>
                      <label className="block text-xs font-medium text-slate-700  mb-1">Memo</label>
                      <textarea className="w-full px-3 py-1 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all h-20 resize-none text-sm" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField label="Invoice Discount %" type="number" />
                      <FormField label="Discount From Day" type="number" />
                    </div>
                  </div>

                  {/* Right Column: Selectors */}
                  <div className="space-y-8">
                    <DualListBox label="Select BarCode Type" options={["Regular"]} selected={[]} />
                    <DualListBox
                      label="Select Users"
                      options={["Test12", "TESTCUST", "TestUser", "TH-Cust1"]}
                      selected={["Admin"]}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="px-8 py-4 bg-slate-50 border-t border-slate-200 flex justify-end gap-3">
              <button className="px-4 py-2 text-sm font-semibold text-white bg-red-500 hover:bg-red-600 rounded-sm flex items-center gap-2 shadow-sm transition-all">
                <X className="size-4" /> Cancel
              </button>
              <button className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-sm flex items-center gap-2 shadow-md shadow-blue-200">
                <Save className="size-4" /> Save Customer
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function FormField({
  label,
  type = "text",
  placeholder = "",
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-regular text-slate-900 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-1.5 border border-slate-200 rounded-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all text-xs"
      />
    </div>
  );
}

function DualListBox({
  label,
  options,
  selected,
}: {
  label: string;
  options: string[];
  selected: string[];
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">{label}</label>
      <div className="flex items-center gap-3">
        <div className="flex-1 border border-slate-200 rounded-md h-40 overflow-y-auto p-1 bg-slate-50">
          {options.map((opt) => (
            <div key={opt} className="px-3 py-1.5 text-xs hover:bg-blue-50 rounded cursor-pointer">
              {opt}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <button className="p-1 border border-slate-200 rounded-md hover:bg-white bg-slate-100 shadow-sm">
            <ChevronRight className="size-4" />
          </button>
        </div>
        <div className="flex-1 border border-slate-200 rounded-md h-40 overflow-y-auto p-1">
          {selected.map((opt) => (
            <div key={opt} className="px-3 py-1.5 text-sm bg-blue-50 text-blue-700 rounded-md mb-1">
              {opt}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
