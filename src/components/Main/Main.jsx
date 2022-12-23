import React from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Page from '../Page/Page';

function Main() {
  return (
    <Page>
      <Header />
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </Page>
  );
}
export default Main;
