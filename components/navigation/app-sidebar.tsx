"use client";

import {
  IconBrush,
  IconBuildingStore,
  IconCalendarEvent,
  IconChartBar,
  IconClipboardList,
  IconDashboard,
  IconFileDescription,
  IconFileInvoice,
  IconFileText,
  IconHelp,
  IconMapPin,
  IconPalette,
  IconReportAnalytics,
  IconSearch,
  IconSettings,
  IconToolsKitchen2,
  IconTruck,
  IconUsersGroup,
} from "@tabler/icons-react";
import * as React from "react";

import { NavDocuments } from "@/components/navigation/nav-documents";
import { NavMain } from "@/components/navigation/nav-main";
import { NavSecondary } from "@/components/navigation/nav-secondary";
import { NavUser } from "@/components/navigation/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import Image from "next/image";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Active Jobs",
      url: "#",
      icon: IconBrush,
    },
    {
      title: "Clients",
      url: "#",
      icon: IconBuildingStore,
    },
    {
      title: "Team & Painters",
      url: "#",
      icon: IconUsersGroup,
    },
    {
      title: "Invoices & Billing",
      url: "#",
      icon: IconFileInvoice,
    },
    {
      title: "Analytics",
      url: "#",
      icon: IconChartBar,
    },
  ],
  navOperations: [
    {
      title: "Scheduling",
      icon: IconCalendarEvent,
      url: "#",
      items: [
        {
          title: "Daily Schedule",
          url: "#",
        },
        {
          title: "Weekly View",
          url: "#",
        },
        {
          title: "Painter Availability",
          url: "#",
        },
      ],
    },
    {
      title: "Estimates",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Pending Estimates",
          url: "#",
        },
        {
          title: "Approved Estimates",
          url: "#",
        },
        {
          title: "Quote Templates",
          url: "#",
        },
      ],
    },
    {
      title: "Job Management",
      icon: IconClipboardList,
      url: "#",
      items: [
        {
          title: "In Progress",
          url: "#",
        },
        {
          title: "Completed",
          url: "#",
        },
        {
          title: "Quality Control",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Help & Support",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Equipment Inventory",
      url: "#",
      icon: IconToolsKitchen2,
    },
    {
      name: "Paint Supplies",
      url: "#",
      icon: IconPalette,
    },
    {
      name: "Vehicle Fleet",
      url: "#",
      icon: IconTruck,
    },
    {
      name: "Job Reports",
      url: "#",
      icon: IconReportAnalytics,
    },
    {
      name: "Client Contracts",
      url: "#",
      icon: IconFileText,
    },
    {
      name: "Service Areas",
      url: "#",
      icon: IconMapPin,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/" className="flex items-center gap-2 px-2 py-1">
              <Image
                src="/double-a-painting-logo.svg"
                alt="Double A Painting Logo"
                width={400}
                height={300}
              />
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
