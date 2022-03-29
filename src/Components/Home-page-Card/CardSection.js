import {Card} from './HomePageCard';
import React from 'react';
import "./CardSection.css";
import { SportsCard } from './SportsWear-card';
import {TopProductData,SportsWearData} from "./Data";
const Cards=()=>{
    return (
        <>
            <h1 className='heading-one'>Top Product On Offer</h1>
            < div className='shoe-section'>
                {TopProductData.map((value,index)=>{
                    return (
                        <div key={index}>
                            <Card
                                image={value.image}
                                subtitle={value.subtitle}/>
                        </div>
                    );
                })}
            </div>
            <h1 className='heading-one'>Trending In Sports Wear</h1>
            <div className='shoe-section'>
                {SportsWearData.map((value1,index_no)=>{
                return (
                    <div key={index_no}>
                        <SportsCard
                            Sports_image={value1.Sports_image}
                            Sports_subtitle={value1.Sports_subtitle}/>
                    </div>
                );
                })}
            </div>   
        </>
    );
}
export  {Cards};