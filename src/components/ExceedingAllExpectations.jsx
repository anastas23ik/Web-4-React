import React from 'react';
import ExpectationsImage from '../assets/img/Feature Image.png';
import expectationsData from '../mockData/expectationsData';

export const ExpectationsImageTemplate = ({ alt }) => {
  return (
    <div className='exceeding_all_expectations__left'>
      <img src={ExpectationsImage} alt={alt} />
    </div>
  );
};

export const ExpectationsRightTemplate = ({
  link: { href, text },
  header,
  content
}) => {
  return (
    <>
      <a href={href} className="top__cta">{text}</a>
      <h2>{header}</h2>
      <p>{content}</p>
      <a href={href} className="bottom__cta">{text}</a>
    </>
  );
};

const ExceedingAllExpectations = () => {
  const { content, header, image, link } = expectationsData;

  return (
    <>
      <div className="exceeding_all_expectations__left">
        <ExpectationsImageTemplate alt={image.alt} />
      </div>
      <div className="exceeding_all_expectations__right">
        <ExpectationsRightTemplate
          content={content}
          header={header}
          link={link}
        />
      </div>
    </>
  );
};

export default ExceedingAllExpectations;