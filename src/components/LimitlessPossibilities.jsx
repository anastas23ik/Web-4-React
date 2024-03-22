import React from "react";
import possibilitiesData from '../mockData/possibilitiesData';

const LimitlessPossibilities = () => {
  const { button, link, title } = possibilitiesData;

  return (
    <>
      <a href={link.href} className="limitless_possibilities__cta">{link.text}</a>
      <div className="limitless_possibilities__middle">
        <h3>{title}</h3>
        <button className="btn">{button}</button>
      </div>
    </>
  );
};

export default LimitlessPossibilities;