import React from "react";
import SummaryRow from "./SummaryRow";
import SummaryTotal from "./SummaryTotal";

const Summary = ({ USCurrencyFormat, selected }) => {
  const total = Object.keys(selected).reduce(
    (acc, curr) => acc + selected[curr].cost,
    0
  );
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {Object.keys(selected).map((feature, idx) => {
        const featureHash = feature + "-" + idx;
        const selectedOption = selected[feature];

        return (
          <SummaryRow
            {...{
              featureHash,
              feature,
              selectedOption,
              USCurrencyFormat
            }}
          />
        );
      })}
      <SummaryTotal total={USCurrencyFormat.format(total)} />
    </section>
  );
};

export default Summary;
