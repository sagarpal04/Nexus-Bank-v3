import React from "react";

export default function ActionButtons() {
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
        <p className="text-lg font-semibold mb-4 text-darkGray">Request loan</p>
        <div className="flex gap-3 items-starts">
          <div className="flex flex-col items-center gap-1">
            <input
              type="text"
              name="loanAmount"
              id="loanAmount"
              className="outline-none bg-white/40 font-inherit text-sm text-center text-black rounded-lg p-1"
            />
            <label htmlFor="loanAmount" className="text-sm">
              Amount
            </label>
          </div>
          <button className="text-sm self-start bg-white px-4 py-1 rounded-lg flex items-center justify-center">
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
