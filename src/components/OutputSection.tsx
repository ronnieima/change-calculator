import React from "react";
import { DENOMINATIONS } from "../App";
import Denomination from "./Denomination";

export default function OutputSection({ changeDue, change }) {
  return (
    <div className="bg-white p-4 col-8 d-flex flex-column gap-4 rounded-1">
      <div
        className={`${
          changeDue >= 0
            ? "bg-success text-success-emphasis"
            : "bg-danger bg-danger-emphasis"
        } text-center py-3 border border-3 border-success-subtle rounded-1`}
      >
        <p className="m-0   fw-bold ">The total change due is ${changeDue}</p>
      </div>
      <div className="d-flex flex-wrap justify-content-between mb-3">
        {DENOMINATIONS.map((d) => (
          <Denomination key={d.label} label={d.label} value={change[d.value]} />
        ))}
      </div>
    </div>
  );
}
