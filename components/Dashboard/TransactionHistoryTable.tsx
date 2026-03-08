import { CircleArrowUp } from 'lucide-react';
import React from 'react'

type THistoryProps = {
    data: {
        id: string;
        category: string;
        amount: string;
        date: string;
        description: string
    }[]
}

const TransactionHistoryTable = ({data} : THistoryProps) => {
    return (
        <div className={`overflow-hidden relative ${data.length === 0 ? '' : 'pb-7'}`}>
            <Table>
                <TableHeader className="bg-[#E6E6E6]">
                    <TableRow className="border-none">
                        <TableHead className="font-[15px] text-[15px] text-[#00201E] px-6 py-4">
                            Category
                        </TableHead>
                        <TableHead className="font-[15px] text-[15px] text-[#00201E] px-6 py-4">
                           Description
                        </TableHead>
                        <TableHead className="font-[15px] text-[15px] text-[#00201E] px-6 py-4">
                            Amount
                        </TableHead>
                        <TableHead className="font-[15px] text-[15px] text-[#00201E] px-6 py-4">
                            Date
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {newResidentsRequest.length === 0 ?
                        <TableRow>
                            <TableCell
                                colSpan={5}
                                className="h-15 text-center"
                            >
                                No data
                            </TableCell>
                        </TableRow>
                        :
                        data.map((transaction, index) => (
                            <TableRow
                                key={transaction.id}
                                className={index % 2 === 0 ? "bg-white" : "bg-[#F6F6F6]"}
                            >
                                <TableCell className="py-4 px-6 text-[#353535] text-[13px] font-medium">
                                    {transaction.category}
                                </TableCell>
                                <TableCell className="py-4 px-6 text-[#353535] text-[13px] font-medium">
                                    {transaction.description}
                                </TableCell>
                                <TableCell className="py-4 px-6 text-[#353535] text-[13px] font-medium">
                                    {transaction.amount}
                                </TableCell>
                                <TableCell className="py-4 px-6 text-[#353535] text-[13px] font-medium">
                                    {transaction.date}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

            {data.length > 0 &&
                <div className="absolute rounded-b-[15px] w-full bg-linear-to-b from-white/50 from-5% to-white to-50% bottom-0 left-0 h-[60px] flex gap-2 items-center justify-end p-5">
                    <p className="text-[15px] font-normal text-[#353535]">View Details</p>
                    <CircleArrowUp strokeWidth={1.5} size={19} className="rotate-45" />
                </div>
            }
        </div>
    )
}

export default TransactionHistoryTable