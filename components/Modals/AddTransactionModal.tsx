'use client'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import z from 'zod';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { categories } from '@/lib/data';
import { Input } from '../ui/input';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useFinance } from '@/providers/FinanceDataProvider';
import { toast } from 'sonner';

// --- FORM SCHEMA ---
const formSchema = z.object({
    category: z.string().min(1, {
        message: "Choose category"
    }),
    description: z.string().min(1, {
        message: "Enter description"
    }),
    amount: z.string().min(1, {
        message: "Enter amount"
    }),
    date: z.string().min(1, {
        message: "Enter date"
    }),
});

type formValues = z.infer<typeof formSchema>;

type TModalProps = {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const AddTransactionModal = ({ openModal, setOpenModal }: TModalProps) => {

    const form = useForm<formValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            category: '',
            description: '',
            amount: '',
            date: ''
        }
    });

    const { addTransaction, financeData, totalExpenses } = useFinance();

    const remainingBalance = (financeData?.monthlyIncome ?? 0) - totalExpenses;
    
    const onSubmit = (values: formValues) => {

        if (Number(values.amount) > remainingBalance) {
            toast.error('Transaction amount exceeds remaining balance');
            return;
        }
        addTransaction({
            category: values.category,
            amount: Number(values.amount),
            description: values.description,
            date: values.date
        });
        toast.success('New transaction added.')
        setOpenModal(false);
        form.reset();
    }

    useEffect(() => {
        if (!openModal) {
            form.reset();
        }
    }, [form, openModal]);

    return (
        <Dialog open={openModal} onOpenChange={(open) => setOpenModal(open)}>

            <DialogContent onOpenAutoFocus={(e) => e.preventDefault()} className="font-poppins p-4 min-[500px]:p-8 max-w-130! w-[95%] bg-[#FCFCFC] rounded-[15px]">
                <DialogTitle className="hidden"></DialogTitle>

                <div className=''>
                    <div className='mb-6 space-y-2'>
                        <h1 className='font-semibold text-[20px] text-[#353535] text-center'>Add Transaction</h1>
                    </div>

                    <FormProvider {...form}>
                        <form className='w-full mt-6 space-y-3 font-poppins' onSubmit={form.handleSubmit(onSubmit)}>

                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem className='mb-3'>
                                        <FormLabel className="text-[#353535] text-sm">
                                            Category
                                        </FormLabel>

                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger className="h-11.25! rounded-[5px] w-full! text-black border border-[#CAC9D9] placeholder:text-[#001413] shadow-none">
                                                    <SelectValue placeholder="Choose category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {categories.map((c, index) => {
                                                    return (
                                                        <SelectItem key={index} value={c} className='font-poppins'>{c}</SelectItem>
                                                    )
                                                })}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#353535] text-sm">
                                            Description
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                className="h-11.25 shadow-none rounded-[5px] text-[#001413] border border-[#CAC9D9] placeholder:text-[#9C9C9C]"
                                                placeholder="Description"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#353535] text-sm">
                                            Amount
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                type='number'
                                                className="h-11.25 shadow-none rounded-[5px] text-[#001413] border border-[#CAC9D9] placeholder:text-[#9C9C9C]"
                                                placeholder="Amount"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#353535] text-sm">
                                            Date
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                type='date'
                                                className="h-11.25 shadow-none rounded-[5px] text-[#001413] border border-[#CAC9D9] placeholder:text-[#9C9C9C]"
                                                placeholder="Date"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className="mt-5 w-full flex mx-auto text-[16px] shadow-none cursor-pointer bg-[#2868FF] hover:bg-[#2868FF]/70 text-white font-semibold py-6">
                                Submit
                            </Button>
                        </form>
                    </FormProvider>

                </div>

            </DialogContent>
        </Dialog>
    )
}

export default AddTransactionModal