import React, { useState } from "react";
import axios from "axios";
export default function ActionButtons({ email, setTransactions }) {
  const [addMoney, setAddMoney] = useState("");
  // const [transferTo, setTransferTo] = useState("");
  // const [amount, setAmount] = useState("");

  const onSubmitAddMoney = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/addmoney", {
        email: email, // Use transferTo or any appropriate email source
        amount: addMoney,
        type: "DEPOSIT",
      });
      alert(response.data.message);
      setTransactions((prev) => [
        ...prev,
        {
          type: "DEPOSIT",
          amount: parseFloat(addMoney),
          date: new Date(),
          email: email,
        },
      ]);

      setAddMoney("");
    } catch (error) {
      console.error("Error adding money:", error);
      alert("Failed to add money. Please try again.");
    }
  };
  // const [addMoney, setAddMoney] = useState("");
  // const onSubmitAddMoney = ()=>{
  //   const response = await axios.post("http://localhost:5000/api/addmoney", {
  //     email: formData.email,
  //     amount: formData.balance,
  //     type: "DEPOSIT",
  //   });
  //   alert(response.data.message);
  //   setAddMoney("")
  // }
  return (
    <div className="flex flex-col gap-3">
      <div className="bg-gradient-to-tl from-[#ffb003] to-[#ffcb03] py-7 px-9 rounded-lg flex flex-col">
        <p className="text-lg font-semibold mb-4 text-darkGray">
          Transfer money
        </p>
        <div className="flex gap-3 items-starts">
          <div className="flex flex-col items-center gap-1">
            <input
              type="text"
              name="transferTo"
              id="transferTo"
              className="outline-none bg-white/40 font-inherit text-sm text-center text-black rounded-lg p-1"
            />
            <label htmlFor="transferTo" className="text-sm">
              Transfer to
            </label>
          </div>
          <div className="flex flex-col items-center gap-1">
            <input
              type="text"
              name="amount"
              id="amount"
              className="outline-none bg-white/40 font-inherit text-sm text-center text-black rounded-lg p-1"
            />
            <label htmlFor="amount" className="text-sm">
              Amount
            </label>
          </div>
          <button className="text-sm self-start bg-white px-4 py-1 rounded-lg flex items-center justify-center">
            →
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-tl-custom py-7 px-9 rounded-lg flex flex-col">
        <p className="text-lg font-semibold mb-4 text-darkGray">Add money</p>
        <div className="flex gap-3 items-starts">
          <div className="flex flex-col items-center gap-1">
            <input
              type="text"
              name="addMoney"
              id="addMoney"
              value={addMoney}
              onChange={(e) => setAddMoney(e.target.value)}
              className="outline-none bg-white/40 font-inherit text-sm text-center text-black rounded-lg p-1"
            />
            <label htmlFor="addMoney" className="text-sm">
              Amount
            </label>
          </div>
          <button
            onClick={onSubmitAddMoney}
            className="text-sm self-start bg-white px-4 py-1 rounded-lg flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-tl from-custom-red-1 to-custom-red-2 py-7 px-9 rounded-lg flex flex-col">
        <p className="text-lg font-semibold mb-4 text-darkGray">
          Close account
        </p>
        <div className="flex gap-3 items-starts">
          <div className="flex flex-col items-center gap-1">
            <input
              type="text"
              name="confirmUser"
              id="confirmUser"
              className="outline-none bg-white/40 font-inherit text-sm text-center text-black rounded-lg p-1"
            />
            <label htmlFor="confirmUser" className="text-sm">
              Confirm user
            </label>
          </div>
          <div className="flex flex-col items-center gap-1">
            <input
              type="text"
              name="confirmPin"
              id="confirmPin"
              className="outline-none bg-white/40 font-inherit text-sm text-center text-black rounded-lg p-1"
            />
            <label htmlFor="confirmPin" className="text-sm">
              Confirm PIN
            </label>
          </div>
          <button className="text-sm self-start bg-white px-4 py-1 rounded-lg flex items-center justify-center">
            →
          </button>
        </div>
      </div>
    </div>
  );
}
