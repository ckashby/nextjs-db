'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
 
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});
 
const CreateInvoice = FormSchema.omit({ id: true, date: true });



export async function createInvoice(formData: FormData) {
    const rawFormData = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    };
    // Test it out:
    console.log(rawFormData);

}

//     Tip: If you're working with forms that have many fields, you may want to consider 
//     using the entries() method with JavaScript's Object.fromEntries(). For example:

// const rawFormData = Object.fromEntries(formData.entries())
