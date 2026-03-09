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


const formSchema = z.object({
    name: z.string().min(1, {
        message: "Enter your first name"
    }),
    monthlyIncome: z.string().min(1, {
        message: "Enter monthly income"
    }),
});

type formValues = z.infer<typeof formSchema>;

type TModalProps = {
    openModal: boolean;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const SetFinanceDataModal = ({ openModal, setOpenModal }: TModalProps) => {

    const { setFinanceData } = useFinance();

    const form = useForm<formValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            monthlyIncome: ''
        }
    });

    useEffect(() => {
        if (!openModal) {
            form.reset();
        }
    }, [form, openModal])

    const onSubmit = (values: formValues) => {
        console.log(values);
        setFinanceData({
            name: values.name,
            monthlyIncome: Number(values.monthlyIncome)
        });
        setOpenModal(false);
    }

    return (
        <Dialog open={openModal} onOpenChange={(open) => setOpenModal(open)}>

            <DialogContent onOpenAutoFocus={(e) => e.preventDefault()} className="font-poppins p-5 min-[500px]:p-10 max-w-137.5! w-[95%] bg-[#FCFCFC] rounded-[15px]">
                <DialogTitle className="hidden"></DialogTitle>

                <div className=''>
                    <div className='space-y-2'>
                        <h1 className='font-semibold text-[20px] text-[#353535] text-center'>Welcome to <span className='text-[#2868FF]'>FinanceTrack</span></h1>
                        <p className='text-[#777] text-center text-sm'>Please fill in your information below</p>
                    </div>

                    <FormProvider {...form}>
                        <form className='w-full mt-5 space-y-5' onSubmit={form.handleSubmit(onSubmit)}>

                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#353535] text-sm">
                                            Name
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                className="h-11.25 shadow-none rounded-[5px] text-[#001413] border border-[#CAC9D9] placeholder:text-[#9C9C9C]"
                                                placeholder="Enter your first name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="monthlyIncome"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-[#353535] text-sm">
                                            Monthly Income
                                        </FormLabel>

                                        <FormControl>
                                            <Input
                                                type='number'
                                                className="h-11.25 shadow-none rounded-[5px] text-[#001413] border border-[#CAC9D9] placeholder:text-[#9C9C9C]"
                                                placeholder="Enter your monthly income"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button className="mt-5 w-full flex mx-auto text-[15px] shadow-none cursor-pointer bg-[#2868FF] hover:bg-[#2868FF]/70 text-white font-medium py-6">
                                Get Started
                            </Button>
                        </form>
                    </FormProvider>

                </div>

            </DialogContent>
        </Dialog>
    )
}

export default SetFinanceDataModal