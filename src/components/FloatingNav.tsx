import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavOption {
  label: string;
  href: string;
  icon: string;
}

interface FloatingNavProps {
  pageTitle: string;
  filteredOptions: NavOption[];
}

export default function FloatingNav({
  pageTitle,
  filteredOptions,
}: FloatingNavProps) {
  return (
    <nav
      className="bg-background/70 text-foreground fixed bottom-5 left-1/2 z-50 flex w-fit -translate-x-1/2 flex-row items-center justify-center rounded-full border px-1 py-1 whitespace-nowrap bg-blend-luminosity shadow-xs backdrop-blur-xl transition"
      aria-label="Floating Navigation"
    >
      <div>
        <div className="relative flex w-fit items-center">
          <div className="text-foreground text-sm font-semibold">
            <DropdownMenu>
              <DropdownMenuTrigger className="float-trigger !pr-3 !pl-4">
                {pageTitle}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevrons-up-down ml-1"
                  aria-hidden="true"
                >
                  <path d="m7 15 5 5 5-5"></path>
                  <path d="m7 9 5-5 5 5"></path>
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" align="center">
                {filteredOptions.map((option) => (
                  <DropdownMenuItem key={option.href}>
                    <a
                      href={option.href}
                      className="flex w-full cursor-pointer items-center justify-between"
                    >
                      <span>{option.label}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-${option.icon}`}
                        aria-hidden="true"
                      >
                        {option.icon === "home" && (
                          <>
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9,22 9,12 15,12 15,22" />
                          </>
                        )}
                        {option.icon === "book" && (
                          <>
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                          </>
                        )}
                        {option.icon === "list-checks" && (
                          <>
                            <path d="m3 17 2 2 4-4" />
                            <path d="m3 7 2 2 4-4" />
                            <path d="M13 6h8" />
                            <path d="M13 12h8" />
                            <path d="M13 18h8" />
                          </>
                        )}
                        {option.icon === "layout-dashboard" && (
                          <>
                            <rect width="7" height="9" x="3" y="3" rx="1" />
                            <rect width="7" height="5" x="14" y="3" rx="1" />
                            <rect width="7" height="9" x="14" y="12" rx="1" />
                            <rect width="7" height="5" x="3" y="16" rx="1" />
                          </>
                        )}
                        {option.icon === "cuboid" && (
                          <>
                            <path d="m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V6.06a2 2 0 0 0-.88-1.66Z" />
                            <path d="M10 22v-8L2.25 9.15" />
                            <path d="m10 14 11.77-6.87" />
                          </>
                        )}
                      </svg>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
