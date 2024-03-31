'use server';
import {z} from 'zod';

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string()
    
})

const CreateInvoice = FormSchema.omit({
    id: true,
    date: true
})

export async function createInvoice(formData: FormData) {
    // const rawFormData = {
    //     customerId: formData.get('customerId'),
    //     amount: formData.get('amount'),
    //     status: formData.get('status'),
    //   };

    // const rawFormData = Object.fromEntries(formData.entries())
    const { customerId, amount, status} = CreateInvoice.parse({
            customerId: formData.get('customerId'),
            amount: formData.get('amount'),
            status: formData.get('status'),
          });

          const amountIncent = amount * 100;
          console.log(new Date().toISOString())
          const data = new Date().toISOString().split("T")[0];


    
}