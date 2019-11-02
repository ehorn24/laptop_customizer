import React from "react";
import slugify from "slugify";

const FeatureOption = ({
  itemHash,
  feature,
  item,
  selected,
  updateFeature,
  USCurrencyFormat
}) => {
  return (
    <div key={itemHash} className="feature__item">
      <input
        type="radio"
        id={itemHash}
        className="feature__option"
        name={slugify(feature)}
        checked={item.name === selected[feature].name}
        onChange={() => updateFeature(feature, item)}
      />
      <label htmlFor={itemHash} className="feature__label">
        {item.name} ({USCurrencyFormat.format(item.cost)})
      </label>
    </div>
  );
};

export default FeatureOption;
