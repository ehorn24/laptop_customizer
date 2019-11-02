import React from "react";

const SummaryTotal = ({ total }) => {
  return (
    <div className="summary__total">
      <div className="summary__total__label">Total</div>
      <div className="summary__total__value">{total}</div>
    </div>
  );
};

export default SummaryTotal;
