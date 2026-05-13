import React, { useState, useMemo, useRef, useEffect } from "react";
import { Search, RotateCcw, Plus, FileUp, Edit2, Trash2, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

// Parsed data from your list
const CUSTOMERS = [
  { code: "AGCT", name: "ARGELITH CERAMIC TILES INC" },
  { code: "AGCTALdI", name: "ARGELITH ALDI" },
  { code: "AIR", name: "AIRCITY" },
  { code: "AKCON", name: "AKCON" },
  { code: "ALLEGRO", name: "ALLEGRO SANITATION" },
  { code: "ALLIED", name: "ALLIED TRADING INC" },
  { code: "AMBROSIA", name: "AMBROSIA BEVERAGES LLC" },
  { code: "APN", name: "AMERICAN PARK NETWORK" },
  { code: "ARESLOG", name: "A-RES LOGISTIC GROUP" },
  { code: "ARIS", name: "ARIES GLOBAL LOGISTICS INC." },
  { code: "ATOM", name: "ATOMIC IMPORTS & EXPORTS INC" },
  { code: "ATS", name: "ATS INTERNATIONAL" },
  { code: "AUREA", name: "AUREA BIOLABS LLC" },
  { code: "AWAS", name: "AMERICAN WORLDWIDE AGENCIES" },
  { code: "BAST", name: "NUCOR HARRIS REBAR NORTHEAST LLC" },
  { code: "BIMI", name: "BOCA IMPORTS & MARKETING" },
  { code: "BOTTOM", name: "BOTTOMS UP BEVERAGE LLC" },
  { code: "CACA", name: "CARGO CARE SERVICES" },
  { code: "CAIM", name: "INTERWINE LLC C/O CARESET IMEX INC" },
  { code: "CANDY", name: "CANDY DISH CANDY" },
  { code: "CAPCITY", name: "CAPCITY BEVERAGE LLC" },
  { code: "CARSHIP", name: "CARSHIP OVERSEAS TRANSPORT" },
  { code: "CFOL", name: "CFOL" },
  { code: "CJCL", name: "CJC LOGISTICS" },
  { code: "CORB", name: "CORBETT INTERNATIONAL" },
  { code: "CREATIVE", name: "CREATIVE ARTISAN BRANDS INC" },
  { code: "CRR", name: "CRR TRUCKING" },
  { code: "CUNN", name: "CUNN" },
  { code: "ENCLOS", name: "ENCLOS CORP" },
  { code: "GEOS", name: "GEO Specialty Chemicals Inc" },
  { code: "GLUNZ", name: "LOUIS GLUNZ BEER INC" },
  { code: "TATA", name: "Tata Tel" },
  { code: "ZAFF", name: "ZAFFERANO AMERICA LLC" },
  // ... add remaining items as needed
];

export function CustomerTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_SIZE = 20;
  const totalPages = Math.max(1, Math.ceil(CUSTOMERS.length / PAGE_SIZE));
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const pageItems = CUSTOMERS.slice(pageStart, pageStart + PAGE_SIZE);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter logic for the dropdown
  const filteredCustomers = useMemo(() => {
    return CUSTOMERS.filter(
      (c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.code.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-4">
      {/* Search & Actions Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-end gap-4">
        {/* Filter Group: Customer Code */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-regular text-slate-600 tracking-wider ml-0.5">
            Customer Code
          </label>
          <input
            type="text"
            className="h-9 w-full md:w-40 rounded-md border border-slate-200 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            placeholder="e.g. AGCT"
          />
        </div>

        {/* Filter Group: Searchable Customer Name Dropdown */}
        <div className="flex flex-col gap-1.5 relative" ref={dropdownRef}>
          <label className="text-[11px] font-regular text-slate-600 tracking-wider ml-0.5">
            Customer Name
          </label>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="h-9 w-full md:w-64 rounded-md border border-slate-200 px-3 text-sm bg-white flex items-center justify-between cursor-pointer focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all"
          >
            <span className="truncate">{selectedCustomer}</span>
            <ChevronDown
              className={`size-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-[60px] left-0 w-full md:w-80 bg-white border border-slate-200 rounded-lg shadow-xl z-50 overflow-hidden">
              <div className="p-2 border-b border-slate-100 bg-slate-50">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 size-3.5 text-slate-400" />
                  <input
                    autoFocus
                    type="text"
                    className="w-full h-8 pl-8 pr-3 text-xs border border-slate-200 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Search name or code..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <ul className="max-h-60 overflow-y-auto py-1">
                <li
                  onClick={() => {
                    setSelectedCustomer("ALL");
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  className="px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer text-slate-600 font-medium border-b border-slate-50"
                >
                  ALL
                </li>
                {filteredCustomers.length > 0 ? (
                  filteredCustomers.map((cust) => (
                    <li
                      key={cust.code}
                      onClick={() => {
                        setSelectedCustomer(cust.name);
                        setIsOpen(false);
                        setSearchTerm("");
                      }}
                      className="px-3 py-2 text-sm hover:bg-blue-50 cursor-pointer group flex flex-col"
                    >
                      <span className="text-slate-700 font-medium group-hover:text-blue-700">
                        {cust.name}
                      </span>
                      {/* <span className="text-[10px] text-slate-400 uppercase">{cust.code}</span> */}
                    </li>
                  ))
                ) : (
                  <li className="px-3 py-4 text-center text-xs text-slate-400">
                    No customers found
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <button className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium flex items-center gap-2">
          Search
        </button>
        <button
          onClick={() => {
            setSelectedCustomer("ALL");
            setSearchTerm("");
          }}
          className="h-9 px-4 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
        >
          <RotateCcw className="size-4" /> Clear
        </button>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 ml-auto w-full md:w-auto">
          <button className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium flex items-center gap-2">
            <Plus className="size-4" /> Add Customer
          </button>
          <button className="h-9 px-4 border border-blue-700 bg-white text-blue-700 hover:border-blue-600 hover:text-blue-600 rounded-md text-sm font-medium flex items-center gap-2 transition-all">
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
            {CUSTOMERS.slice(0, 20).map((cust) => {
              const emailSlug = cust.code.toLowerCase();
              const email = `${emailSlug}@${emailSlug}corp.com`;
              const phone = `(${(200 + (cust.code.charCodeAt(0) % 700)).toString()}) ${(100 + (cust.code.charCodeAt(1) % 900)).toString()}-${(1000 + (cust.code.length * 137) % 9000).toString()}`;
              return (
                <tr key={cust.code} className="hover:bg-slate-50/80 transition-colors group">
                  <td className="px-4 py-3 text-sm font-medium text-slate-700 uppercase">{cust.code}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{cust.name}</td>
                  <td className="px-4 py-3 text-sm text-slate-500 font-mono text-[13px]">
                    {email.length > 28 ? email.slice(0, 25) + "..." : email}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-500">{phone}</td>
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
              );
            })}
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
