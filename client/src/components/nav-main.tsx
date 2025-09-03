"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { FaBook, FaHome } from "react-icons/fa";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarMenu>
        <Collapsible
          key={"ড্যাশবোর্ড হোম"}
          asChild
          defaultOpen={true}
          className="group/collapsible cursor-pointer"
        >
          <SidebarMenuItem className=" cursor-pointer">
            <CollapsibleTrigger asChild>
              <Link href="/dashboard">
                <SidebarMenuButton
                  tooltip="ড্যাশবোর্ড হোম"
                  className=" cursor-pointer"
                >
                  <FaHome />
                  <span className=" text-lg font-cd-bangla font-medium block">
                    ড্যাশবোর্ড হোম
                  </span>
                  {/* <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
                </SidebarMenuButton>
              </Link>
            </CollapsibleTrigger>
          </SidebarMenuItem>
        </Collapsible>

        <Collapsible
          key={"আমার কোর্স"}
          asChild
          defaultOpen={true}
          className="group/collapsible cursor-pointer"
        >
          <SidebarMenuItem className=" cursor-pointer">
            <CollapsibleTrigger asChild>
              <Link href="/dashboard/mycourse">
                <SidebarMenuButton
                  tooltip="আমার কোর্স"
                  className=" cursor-pointer"
                >
                  <FaBook />
                  <span className=" text-lg font-cd-bangla font-medium block">
                    আমার কোর্স
                  </span>
                  {/* <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" /> */}
                </SidebarMenuButton>
              </Link>
            </CollapsibleTrigger>
          </SidebarMenuItem>
        </Collapsible>
      </SidebarMenu>
    </SidebarGroup>
  );
}
