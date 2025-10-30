import { prisma } from "@/lib/prisma";
import { TExpense } from "../models/expense";

export default async function getExpenses(){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const expenses: TExpense[] = await prisma.expense.findMany();

    
    return expenses;
}