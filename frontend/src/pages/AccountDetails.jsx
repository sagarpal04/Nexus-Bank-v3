import React from "react";
import BalanceOverview from "./BalanceOverview";
import TransactionList from "./TransactionList";
import ActionButtons from "./ActionButtons";
import Footer from "./Footer";
import { useState } from "react";
import { LogOut } from "lucide-react";

export default function AccountDetails() {
  const [balance, setBalance] = useState(5267);
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "DEPOSIT",
      date: "2024-10-30T03:46:15.799Z",
      amount: 130000,
    },
    {
      id: 2,
      type: "DEPOSIT",
      date: "2024-10-30T03:46:15.799Z",
      amount: 7997,
    },
    {
      id: 3,
      type: "WITHDRAWAL",
      date: "2024-10-30T03:46:15.799Z",
      amount: 13390,
    },
    {
      id: 4,
      type: "WITHDRAWAL",
      date: "2024-10-30T03:46:15.799Z",
      amount: 13390,
    },
    {
      id: 5,
      type: "WITHDRAWAL",
      date: "2024-10-30T03:46:15.799Z",
      amount: 13390,
    },
    {
      id: 6,
      type: "WITHDRAWAL",
      date: "2024-10-30T03:46:15.799Z",
      amount: 13390,
    },
    {
      id: 7,
      type: "WITHDRAWAL",
      date: "2024-10-30T03:46:15.799Z",
      amount: 13390,
    },
    {
      id: 8,
      type: "WITHDRAWAL",
      date: "2024-10-30T03:46:15.799Z",
      amount: 13390,
    },
    {
      id: 9,
      type: "WITHDRAWAL",
      date: "2024-10-30T03:46:15.799Z",
      amount: 13390,
    },
    {
      id: 10,
      type: "WITHDRAWAL",
      date: "2024-10-30T03:46:15.799Z",
      amount: 13390,
    },
    {
      id: 11,
      type: "WITHDRAWAL",
      date: "2024-10-30T03:46:15.799Z",
      amount: 13390,
    },
    {
      id: 12,
      type: "WITHDRAWAL",
      date: "2024-10-30T03:46:15.799Z",
      amount: 13390,
    },
    {
      id: 13,
      type: "DEPOSIT",
      date: "2024-10-30T03:46:15.799Z",
      amount: 1339000000,
    },
  ]);

  const withdrawAmount = transactions
    .filter((transaction) => transaction.type === "WITHDRAWAL")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const depositAmount = transactions
    .filter((transaction) => transaction.type === "DEPOSIT")
    .reduce((acc, transaction) => acc + transaction.amount, 0);
  const IND_CURRENCY_SYMBOL = "₹";
  const name = "Sagar Pal";
  return (
    <div className="bg-gray-100 flex justify-center min-h-screen">
      <div className="w-9/12  my-12">
        <div className="mb-10 flex items-center justify-between">
          <p className="text-3xl font-medium text-gray-900 ">
            Welcome Back, {name.split(" ")[0]}
          </p>
          <LogOut size={30} />
        </div>
        <BalanceOverview
          balance={balance}
          IND_CURRENCY_SYMBOL={IND_CURRENCY_SYMBOL}
        />
        <div className="flex mt-14 gap-4">
          <TransactionList transactions={transactions} />
          <ActionButtons />
        </div>
        <Footer withdrawAmount={withdrawAmount} depositAmount={depositAmount} />
      </div>
    </div>
  );
}
