"use server";

import { prisma } from "@/lib/prisma";

async function createTestExpense() {
  "use server";
  await prisma.expense.create({
    data: {
      title: "expense test",
      value: 500,
    },
  });
}

export { createTestExpense };
