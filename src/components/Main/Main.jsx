import React, { useContext } from 'react';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Page from '../Page/Page';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Navigation from '../Navigation/Navigation';

function Main() {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <Page>
      {currentUser && currentUser.name ? <Navigation /> : <Header />}
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
