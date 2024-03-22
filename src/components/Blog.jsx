import React from 'react';

import blogData from '../mockData/blogData';

import Img1 from '../assets/img/blog/Rectangle 22-4.png';
import Img2 from '../assets/img/blog/Rectangle 22-1.png';
import Img3 from '../assets/img/blog/Rectangle 22-2.png';
import Img4 from '../assets/img/blog/Rectangle 22-3.png';
import Img5 from '../assets/img/blog/Rectangle 22.png';

const getImage = (alt) => {
  if (alt === 'first') return Img1;
  if (alt === 'second') return Img2;
  if (alt === 'third') return Img3;
  if (alt === 'fourth') return Img4;
  if (alt === 'fifth') return Img5;
  return null;
};

export const BlogItem = ({
  alt,
  date,
  title,
  link: { href, text }
}) => {
  return (
    <div className="blog_grid_container"> 
      <div className="">
        <img src={getImage(alt)} alt={'alt'} />
      </div>
      <div className="blog-content">
        <div>
        <h6>{date}</h6>
        <h3>{title}</h3>
        </div>
        <a href={href} className="">{text}</a>
      </div>
    </div>
  );
};

const Blog = () => {
  const { items } = blogData;

  return (
    <>
      <h1>Многое Происходит,<br />
      Мы Ведем об Этом Блог.</h1>
      <div className="blog_containers">
        {items.map((item, idx) => (
          <BlogItem
            key={idx}
            alt={item.img.alt}
            link={item.link}
            date={item.date}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
};

export default Blog;