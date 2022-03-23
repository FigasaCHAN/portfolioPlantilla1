import React from 'react';
import "./Main.css";
import { AboutMe } from '../AboutMeComponent/AboutMe';
import { AboutServices } from '../AboutServicesComponent/AboutServices';
import { Portfolio } from '../PortfolioComponent/Portfolio';
import { Review } from '../ReviewComponent/Review';

export function Main() {
  return (
    <main>
        <AboutMe/>
        <Portfolio/>
        <Review/>
        <AboutServices/>
    </main>
  )
}
