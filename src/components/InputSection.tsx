import React, { useState } from "react";
import NumberInput from "./NumberInput";
import { DENOMINATIONS } from "../App";

export default function InputSection({ setChange, setChangeDue }) {
  const [amountDue, setAmountDue] = useState("");
  const [amountReceived, setAmountReceived] = useState("");

  function calculateChange(amountDue, amountReceived) {
    if (!amountDue || !amountReceived) return;

    amountDue = parseFloat(amountDue);
    amountReceived = parseFloat(amountReceived);
    let diff = Math.round((amountReceived - amountDue) * 100);
    setChangeDue(diff / 100);
    const change = {};
    DENOMINATIONS.forEach((d) => {
      const count = Math.floor(diff / d.costInPennies);

      change[d.value] = count;

      diff -= count * d.costInPennies;
    });
    setChange(change);
  }

  return (
    <div className="bg-white  col-4 rounded align-self-start">
      <h5 className="bg-light py-2 px-3 rounded-top-1">Enter Information</h5>
      <div className="p-4 d-flex flex-column gap-4">
        <NumberInput
          label={"How much is due?"}
          name={"amountDue"}
          setState={setAmountDue}
          value={amountDue}
        />
        <NumberInput
          label={"How much was received?"}
          name={"amountReceived"}
          setState={setAmountReceived}
          value={amountReceived}
        />
      </div>
      <div className="bg-light w-100 px-2 py-3 rounded-bottom-1">
        <button
          onClick={() => calculateChange(amountDue, amountReceived)}
          className="btn btn-primary w-100"
        >
          Calculate
        </button>
      </div>
    </div>
  );
}
