'use client'
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import z from 'zod';
import { Input } from '../ui/input';
import { Dispatch, SetStateAction, useEffect } from 'react';
import { useFinance } from '@/providers/FinanceDataProvider';
import { toast } from 'sonner';

const formSchema = z.object({
    budget: z.string().min(1, {
        message: "Enter budget limit"
    }),
});

type formValues = z.infer<typeof formSchema>;

type TModalProps = {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const EditBudgetModal = ({ openModal, setOpenModal }: TModalProps) => {

    const form = useForm<formValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            budget: ''
        }
    });

    const { financeData, editBudgetLimit } = useFinance();


    const onSubmit = (values: formValues) => {
        console.log(values);
        if (financeData?.monthlyIncome && (financeData.monthlyIncome < Number(values.budget))) {
            toast.error('Budget cannot exceed monthly income');
            return
        }
        editBudgetLimit(Number(values.budget))
        setOpenModal(false);
    }

    useEffect(() => {
        if (!openModal) {
            form.reset();
        }
    }, [form, openModal])

    return (
        <Dialog open={openModal} onOpenChange={(open) => setOpenModal(open)}>

            <DialogContent onOpenAutoFocus={(e) => e.preventDefault()} className="font-poppins p-5 min-[500px]:p-10 max-w-137.5! w-[95%] bg-[#FCFCFC] rounded-[15px]">
                <DialogTitle className="hidden"></DialogTitle>

                <div className=''>
                    <div className='space-y-2'>
                        <h1 className='font-semibold text-[20px] text-[#353535] text-center'>Edit Budget Information</h1>
                    </div>

                    <FormProvider {...form}>
                        <form className='w-full mt-5 space-y-5' onSubmit={form.handleSubmit(onSubmit)}>

                            <FormField
                                control={form.control}
                                name="budget"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#353535] text-sm">
                                            Budget Limit
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                className="h-11.25 shadow-none rounded-[5px] text-[#001413] border border-[#CAC9D9] placeholder:text-[#9C9C9C]"
                                                placeholder="Enter your budget limit"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className="mt-5 w-full flex mx-auto text-[15px] shadow-none cursor-pointer bg-[#2868FF] hover:bg-[#2868FF]/70 text-white font-medium h-11">
                                Save
                            </Button>
                        </form>
                    </FormProvider>

                </div>

            </DialogContent>
        </Dialog>
    )
}

export default EditBudgetModal