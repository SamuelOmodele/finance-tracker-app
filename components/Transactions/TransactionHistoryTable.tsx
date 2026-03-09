import { CircleArrowUp } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Transaction } from '@/lib/types';
import Link from 'next/link';
import { CATEGORY_TEXT_COLORS } from '@/lib/data';

type TProps = {
    data: Transaction[],
    mode?: 'ALL' | 'FEW'
}

const TransactionHistoryTable = ({ data, mode = 'ALL' }: TProps) => {
    return (
        <div className={`w-full overflow-auto relative ${data.length > 5 && mode === 'FEW' ? 'pb-7' : 'pb-0'}`}>
            
                <Table className='w-full'>
                    <TableHeader className="bg-[#F3F5F7] relative rounded-[9px]" style={{ borderRadius: '30px' }}>
                        <TableRow className="border-none rounded-[5px]">
                            <TableHead className="font-semibold text-[14px] text-[#00201E] px-6 py-4">
                                ID
                            </TableHead>
                            <TableHead className="font-semibold text-[14px] text-[#00201E] px-6 py-4">
                                Category
                            </TableHead>
                            <TableHead className="font-semibold text-[14px] text-[#00201E] px-6 py-4">
                                Description
                            </TableHead>
                            <TableHead className="font-semibold text-[14px] text-[#00201E] px-6 py-4">
                                Amount
                            </TableHead>
                            <TableHead className="font-semibold text-[14px] text-[#00201E] px-6 py-4">
                                Date
                            </TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {data.length === 0 ?
                            <TableRow>
                                <TableCell
                                    colSpan={5}
                                    className="h-15 text-center"
                                >
                                    No data
                                </TableCell>
                            </TableRow>
                            :
                            data.slice(0, mode === 'FEW' ? 5 : data.length).map((transaction, index) => {

                                const color = CATEGORY_TEXT_COLORS[transaction.category];
                                return (
                                    <TableRow key={transaction.id}
                                        className={index % 2 === 0 ? "bg-white" : "bg-white"}
                                    >
                                        <TableCell className="py-4.5 px-6 text-[#353535] text-[13px] font-medium">
                                            {transaction.id}
                                        </TableCell>
                                        <TableCell style={{ color: color }} className={`py-4.5 px-6 text-[13px] font-medium`}>
                                            {transaction.category}
                                        </TableCell>
                                        <TableCell className="py-4.5 px-6 text-[#353535] text-[13px] font-medium">
                                            {transaction.description}
                                        </TableCell>
                                        <TableCell className="py-4.5 px-6 text-[#353535] text-[13px] font-medium">
                                            &#8358;{Number(transaction.amount).toLocaleString()}
                                        </TableCell>
                                        <TableCell className="py-4.5 px-6 text-[#353535] text-[13px] font-medium">
                                            {transaction.date}
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>

                {mode === 'FEW' && data.length > 5 &&
                    <div className="absolute rounded-b-[15px] w-full bg-linear-to-b from-white/50 from-5% to-white to-50% bottom-0 left-0 h-15 flex items-center justify-end p-5">
                        <Link href={'/dashboard/transactions'} className='flex items-center gap-2 hover:text-[#2868FF]'>
                            <p className="text-[14px] font-medium text-[#353535] hover:text-inherit cursor-pointer">View All</p>
                            <CircleArrowUp strokeWidth={1.5} size={20} className="rotate-45" />
                        </Link>
                    </div>
                }
        </div>
    )
}

export default TransactionHistoryTable