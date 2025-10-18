"use server";

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

export { createTestExpense };
