import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import FooterLine from "../components/FooterLine";

import ExceedingAllExpectations from '../components/ExceedingAllExpectations';
import LimitlessPossibilities from '../components/LimitlessPossibilities';
import Blog from '../components/Blog';
import FooterEnd from '../components/FooterEnd';

const Home = () => {
  return (
    <div className="wrapper">
      <div className="page">
        <section className="section header">
          <Header />
        </section>
        <section className="section hero_section">
          <Hero />
        </section>
        <section className="section brands_section">
          <Brands />
        </section>
        <section className="section what_is_chatgpt_section">
          <WhatIsChatGpt />
        </section>
        <section className="section future_here">
          <FutureHere />
        </section>
        <section className="section exceeding_all_expectations">
          <ExceedingAllExpectations />
        </section>
        <section className="section limitless_possibilities">
          <LimitlessPossibilities />
        </section>
        <section className="section blog">
          <Blog />
        </section>
        <section className="section footer__end">
          <FooterEnd />
        </section>
      </div>
      <FooterLine />
    </div>
  );
};

export default Home;
