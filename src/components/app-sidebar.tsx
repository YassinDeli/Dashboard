import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Cctv,
  ChartLine,
  ChartNoAxesColumnIncreasing,
  CheckCheck,
  CircleHelp,
  ClipboardCheck,
  Command,
  Database,
  FileSearch,
  FileText,
  Flag,
  Frame,
  GalleryVerticalEnd,
  Info,
  LayoutDashboard,
  Logs,
  Map,
  OctagonX,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Veille Réglementaire",
      logo: Cctv ,
      
    },
   
  ],
  navMain: [
    {
      title: "Général",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Tableau de bord",
          url: "#",
          icon: ChartLine,
        },
        {
          title: "Tous les Textes",
          url: "#",
          icon: Database, 
        },
        {
          title: "Mes Textes",
          url: "#",
          icon: Logs, 
        },
      ],
    },
    {
      title: "Analyse",
      url: "#",
      icon:ChartNoAxesColumnIncreasing,
      items: [
        {
          title: "Non Analysé",
          url: "#",
          icon:CircleHelp,
        },
        {
          title: "Non Conformes",
          url: "#",
          icon:OctagonX,
        },
        {
          title: "Partiel Conformes",
          url: "#",
          icon:FileSearch,
        },{
          title: "Candidats Conformes",
          url: "#",
          icon:Flag,
        },{
          title: "Conformes",
          url: "#",
          icon:CheckCheck,
        },
      ],
    },
    {
      title: "Etat Des Actions",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Bilan des Actions",
          url: "#",
          icon: ClipboardCheck,
        },
        {
          title: "Toutes les Actions",
          url: "#",
          icon:Logs
        },
      ],
    },
    {
      title: "Applicabilté",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Applicables",
          url: "#",
          icon: ClipboardCheck,
        },
        {
          title: "A Vérifier",
          url: "#",
          icon: CircleHelp,
        },
        {
          title: "Pour Info",
          url: "#",
          icon: Info,
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
