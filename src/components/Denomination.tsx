import React from "react";

export default function Denomination({ label, value }) {
  return (
    <div className="bg-light d-flex flex-column align-items-center col-3 p-5 border border-3 mb-3">
      <h4>{label}</h4>
      <span className="fs-3">{value}</span>
    </div>
  );
}
