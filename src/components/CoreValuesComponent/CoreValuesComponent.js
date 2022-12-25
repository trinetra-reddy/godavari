import React from "react";
import CoreValues from "../CoreValues/CoreValues";
import "./CoreValuesComponent.scss";
import immaculateDesigns from "../../images/CoreValuesImgs/ImmaculateDesign.jpg";
import vlaueForMoney from "../../images/CoreValuesImgs/valuefor-money.jpg";
import promptServices from "../../images/CoreValuesImgs/prompt-service.jpg";
import happyCommunity from "../../images/CoreValuesImgs/happy-community.jpg";



const CoreValuesComponent=()=>{
    const corecontent="Every square inch is diligently crafted to ensure maximum utility,supreme aesthetic value and quality enhancement.End to end perfection is the key while designing each corner of every project.";
    const vlaueformoney="We respect the hard-earned money of our esteemed customers.And that's why we try our level best to give them maximum return for the trust they show on us.Because client satisfaction is our ultimate goal.";
    const promptservices="Time is a privilege and every successful and amibitious customer is deprived of it.Turn-around time is the buzzwood today and services plays a vital role in the industry we are into.We are always on our toes to deliver value to our customers.";
    const happycommunity="We are building gated communities at prime locations of a metro city growing at a lightning fast pace.Every customer is a respected memeber of Godavari builders and developers Happy Community which is expanding day-by-day.";
    return (
        <>
        <div className="coreValuesComponent">
            <div className="coreValues1">
            <CoreValues coreImg={immaculateDesigns} corealt="Immaculate-Design" corecontent={corecontent} corevaluesheading="Immaculate Designs"></CoreValues>
            <CoreValues coreImg={vlaueForMoney} corealt="Value-For-Money" corecontent={vlaueformoney} corevaluesheading="Value-for-money Deals"></CoreValues>
            </div>
            <div className="coreValues1">
            <CoreValues coreImg={promptServices} corealt="Prompt-Services" corecontent={promptservices} corevaluesheading="Prompt Service"></CoreValues>
            <CoreValues coreImg={happyCommunity} corealt="Happy-Community" corecontent={happycommunity} corevaluesheading="Happy Community"></CoreValues>
            </div>
        </div>
        
        </>
    );
};

export default CoreValuesComponent;