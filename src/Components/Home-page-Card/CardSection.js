import {Card} from './HomePageCard';
import React from 'react';
import "./CardSection.css";
import {TopProductData, SportsWearData} from "./Data";
const Cards=()=>{
    return (
        <>
            <h1 className='heading-one'>Top Product On Offer</h1>
            < div className='shoe-section'>
                {TopProductData.map((value)=>{
                    return (
                        <>
                        <Card
                            image={value.image}
                            subtitle={value.subtitle}/>
                        </>
                    );
                })}
            </div>
            <h1 className='heading-one'>Trending In Sports Wear</h1>
            <div className='shoe-section'>
                {SportsWearData.map((value)=>{
                return (
                    <>
                    <Card
                        image={value.image}
                        subtitle={value.subtitle}/>
                    </>
                );
                })}
            </div>   
        </>
    );
}
export  {Cards};