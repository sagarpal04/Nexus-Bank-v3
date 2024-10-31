import React from "react";
import BalanceOverview from "./BalanceOverview";
import TransactionList from "./TransactionList";
import ActionButtons from "./ActionButtons";
import Footer from "./Footer";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { useNavigate, Navigate } from "react-router-dom"; // Import Navigate
import { useAuth } from "../useContext/AuthContext";

export default function AccountDetails() {
  const navigate = useNavigate();
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [balance, setBalance] = useState(5267);
  const [transactions, setTransactions] = useState([
    { id: 1, type: "DEPOSIT", date: "2024-10-01T10:30:00.000Z", amount: 5000 },
    {
      id: 2,
      type: "WITHDRAWAL",
      date: "2024-10-02T12:00:00.000Z",
      amount: 3000,
    },
    { id: 3, type: "DEPOSIT", date: "2024-10-03T14:15:00.000Z", amount: 7000 },
    {
      id: 4,
      type: "WITHDRAWAL",
      date: "2024-10-04T09:30:00.000Z",
      amount: 2000,
    },
    { id: 5, type: "DEPOSIT", date: "2024-10-05T11:45:00.000Z", amount: 10000 },
    { id: 6, type: "DEPOSIT", date: "2024-10-06T13:20:00.000Z", amount: 5000 },
    {
      id: 7,
      type: "WITHDRAWAL",
      date: "2024-10-07T15:30:00.000Z",
      amount: 1200,
    },
    { id: 8, type: "DEPOSIT", date: "2024-10-08T08:10:00.000Z", amount: 8000 },
    {
      id: 9,
      type: "WITHDRAWAL",
      date: "2024-10-09T16:40:00.000Z",
      amount: 2500,
    },
    {
      id: 10,
      type: "DEPOSIT",
      date: "2024-10-10T17:25:00.000Z",
      amount: 15000,
    },
    {
      id: 11,
      type: "WITHDRAWAL",
      date: "2024-10-11T10:05:00.000Z",
      amount: 1800,
    },
    { id: 12, type: "DEPOSIT", date: "2024-10-12T14:35:00.000Z", amount: 9000 },
    {
      id: 13,
      type: "DEPOSIT",
      date: "2024-10-13T13:15:00.000Z",
      amount: 12000,
    },
    {
      id: 14,
      type: "WITHDRAWAL",
      date: "2024-10-14T15:45:00.000Z",
      amount: 1700,
    },
    { id: 15, type: "DEPOSIT", date: "2024-10-15T09:30:00.000Z", amount: 6000 },
    {
      id: 16,
      type: "WITHDRAWAL",
      date: "2024-10-16T18:00:00.000Z",
      amount: 4000,
    },
    { id: 17, type: "DEPOSIT", date: "2024-10-17T08:45:00.000Z", amount: 7000 },
    {
      id: 18,
      type: "WITHDRAWAL",
      date: "2024-10-18T11:00:00.000Z",
      amount: 2100,
    },
    { id: 19, type: "DEPOSIT", date: "2024-10-19T17:15:00.000Z", amount: 3000 },
    {
      id: 20,
      type: "WITHDRAWAL",
      date: "2024-10-20T19:45:00.000Z",
      amount: 2500,
    },
    { id: 21, type: "DEPOSIT", date: "2024-10-21T12:35:00.000Z", amount: 4000 },
    {
      id: 22,
      type: "WITHDRAWAL",
      date: "2024-10-22T16:10:00.000Z",
      amount: 1600,
    },
    { id: 23, type: "DEPOSIT", date: "2024-10-23T10:55:00.000Z", amount: 9000 },
    { id: 24, type: "DEPOSIT", date: "2024-10-24T13:05:00.000Z", amount: 8500 },
    {
      id: 25,
      type: "WITHDRAWAL",
      date: "2024-10-25T14:25:00.000Z",
      amount: 3000,
    },
    {
      id: 26,
      type: "DEPOSIT",
      date: "2024-10-26T10:40:00.000Z",
      amount: 15000,
    },
    {
      id: 27,
      type: "WITHDRAWAL",
      date: "2024-10-27T09:30:00.000Z",
      amount: 2000,
    },
    {
      id: 28,
      type: "DEPOSIT",
      date: "2024-10-28T12:15:00.000Z",
      amount: 20000,
    },
    {
      id: 29,
      type: "WITHDRAWAL",
      date: "2024-10-29T15:20:00.000Z",
      amount: 4500,
    },
    {
      id: 30,
      type: "DEPOSIT",
      date: "2024-10-30T14:00:00.000Z",
      amount: 11000,
    },
  ]);

  console.log(isAuthenticated);

  const withdrawAmount = transactions
    .filter((transaction) => transaction.type === "WITHDRAWAL")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const depositAmount = transactions
    .filter((transaction) => transaction.type === "DEPOSIT")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const IND_CURRENCY_SYMBOL = "₹";
  const name = "Sagar Pal";

  return isAuthenticated ? (
    <div className="bg-gray-100 flex justify-center min-h-screen">
      <div className="w-9/12 my-12">
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
  ) : (
    <Navigate to="/" /> // Use Navigate here
  );
}
