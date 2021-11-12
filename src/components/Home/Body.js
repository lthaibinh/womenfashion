import React from "react";
import Banner from "./Body_Banner";
import BestSeller from './Body_BestSeller';
import BannerBottom from "./Body_BannerBottom";
import SpecialDeals  from "./Body_SpecialDeals";
import NewProducts from "./Body_NewProducts";
import TopBrands from './Body_TopBrands';
import NewsLetter from '../General/Footer_NewsLetter';
function Body() {
    return (
        <div>
            <Banner></Banner>
            <BestSeller></BestSeller>
            <BannerBottom></BannerBottom>
            <SpecialDeals></SpecialDeals>
            <NewProducts></NewProducts>
            <TopBrands></TopBrands>
            <NewsLetter></NewsLetter>
        </div>
    )
}
export default Body;