import { prisma } from "@/shared/lib/prisma";

export default async function getExpenses(){
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const expenses = await prisma.expense.findMany({include: {category: true}});

    console.log('exp: ', expenses);
    
    return expenses;
}