import React from "react";

export default function NumberInput({ label, name, setState, value }) {
  return (
    <div>
      <label htmlFor={name} className="form-label fw-bold">
        {label}
      </label>
      <div className="input-group-lg">
        <input
          id={name}
          name={name}
          type="number"
          value={value}
          onChange={(e) => setState(e.target.value)}
          className="form-control"
        />
      </div>
    </div>
  );
}
