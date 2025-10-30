import {z} from 'zod';

export default function expenseSchema(){
    return z.object({
        title: z.string().min(1, 'Title is mandatory'),
        value: z.number().min(1, 'Value is mandatory'),
        category: z.string().min(1, 'Category is mandatory'),
        date: z.date().safeParse(new Date()),
    })
}