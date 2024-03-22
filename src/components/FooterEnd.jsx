import React from "react";
import footerData from "../mockData/footerData";

import LogoImg from '../assets/img/logo.svg';

export const FooterHeroTemplate = ({ header, button }) => {
  return (
    <>
      <h1>{header}</h1>
      <button className="btn">{button}</button>
    </>
  );
};

export const FooterLogoTemplate = ({
  alt,
  address
}) => {
  return (
    <div className="footer_item_logo">
      <img src={LogoImg} alt={alt} />
      <p>{address}</p>
    </div>
  );
};

export const FooterColumnTemplate = ({ title, items }) => {
  return (
    <div className="footer_item">
      <p>{title}</p>
      {items.map(item => (
        <a key={item.text} href={item.href}>{item.text}</a>
      ))}
    </div>
  );
};


const FooterEnd = () => {
  const { address, button, columns, header, logo } = footerData;
  console.log('columns', columns);

  return (
    <>
      <FooterHeroTemplate button={button} header={header} />
      <footer className="footer">
        <FooterLogoTemplate address={address} alt={logo.alt} />
        <div className="footer_items">
          {columns.map(col => (
            <FooterColumnTemplate key={col.title} title={col.title} items={col.items} />
          ))}
        </div>
      </footer>
    </>
  );
};

export default FooterEnd;