import React from 'react';
import Banner from './Banner';
import Banner2 from './Bannernew';
import Category from './Category'
import Dineout from './Dineout';
import Cities from './cities';
import Grocery from './Grocery';
import Header from './Header';
import Fotter from './Fotter';


const Home = () => {
  return (
    <>
    <Header/>
      <Banner/>
      <Category/>
      <Dineout/>
      <Banner2/>
      <Cities/>
      <Grocery/>
      <Fotter/>
    </>
  )
}

export default Home
