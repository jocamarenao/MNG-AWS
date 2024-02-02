/*
  Warnings:

  - You are about to drop the `Saving` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SavingExpense` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SavingExpense" DROP CONSTRAINT "SavingExpense_expenseId_fkey";

-- DropForeignKey
ALTER TABLE "SavingExpense" DROP CONSTRAINT "SavingExpense_savingsId_fkey";

-- AlterTable
ALTER TABLE "Expense" ADD COLUMN     "period" INTEGER NOT NULL DEFAULT 2,
ADD COLUMN     "savings" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "Saving";

-- DropTable
DROP TABLE "SavingExpense";
