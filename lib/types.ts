import { LucideProps } from "lucide-react"
import { ForwardRefExoticComponent } from "react"

export type TSidebarData = {
    id: number;
    name: string;
    path: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>
}

export type Transaction = {
    id: number;
    category: string;
    amount: number;
    date: string;
    description: string
}