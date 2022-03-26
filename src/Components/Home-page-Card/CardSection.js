import {Card} from './HomePageCard';
import React from 'react';
import "./CardSection.css";
import {Data_one, Data_Two} from "./Data";
const Cards=()=>{
    return (
        <>
            <h1 className='heading-one'>Trending In Sports Wear</h1>
            < div className='shoe-section'>
                {Data_one.map((value)=>{
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
                {Data_Two.map((value)=>{
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