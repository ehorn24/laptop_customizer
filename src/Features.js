import React from "react";
import slugify from "slugify";
import FeatureOption from "./FeatureOption";

const Features = ({ USCurrencyFormat, features, selected, updateFeature }) => {
  return Object.keys(features).map((feature, idx) => {
    const featureHash = feature + "-" + idx;

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {features[feature].map(item => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <FeatureOption
              {...{
                itemHash,
                feature,
                item,
                selected,
                updateFeature,
                USCurrencyFormat
              }}
            />
          );
        })}
      </fieldset>
    );
  });
};

export default Features;
