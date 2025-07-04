import {
  ChartNoAxesGantt,
  TicketPercent,
  ChartNoAxesColumn,
  PartyPopper,
  Rss,
  Info,
} from "lucide-react";

export const DashboardLinksPage = [
  {
    label: "Overview",
    icon: ChartNoAxesGantt,
    value: "/overview",
  },
  {
    label: "Mes evenements",
    icon: PartyPopper,
    value: "/mes-evenements",
  },
  {
    label: "Mes tickets",
    icon: TicketPercent,
    value: "/mes-tickets",
  },
  {
    label: "Statistiques",
    icon: ChartNoAxesColumn,
    value: "/mes-stats",
  },
];

export const DashboardLinksHelp = [
  {
    label: "Aide",
    icon: Info,
    value: "#",
  },
  {
    label: "Blog",
    icon: Rss,
    value: "#",
  },
];
