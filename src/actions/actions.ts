"use server";

import { TExpense } from "@/app/features/expenses/models/expense";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function createTestExpense() {
  "use server";
  await prisma.expense.create({
    data: {
      title: "expense test",
      value: 500,
    },
  });
  revalidatePath("/");
}

async function createExpense(expense: TExpense) {
  "use server";
  await prisma.expense.create({
    data: {
      title: expense.title,
      value: expense.value,
      category: expense.category,
    }
  })
}

export { createTestExpense, createExpense };
