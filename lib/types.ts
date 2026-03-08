import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent } from "react"

export type TSidebarData = {
    id: number;
    name: string;
    path: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>
}

export type TChartData = {
    name: string;
    value: number;
}