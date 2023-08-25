import React, { Component } from "react";
import './Farm.css';

const FarmPage = () => {
    return (
        <div id="farmpics">
            <img src={ require('./img/farm/favorite.jpg') } alt="Buff orpington preening herself under a tree"/>
            <img src={ require('./img/farm/flowers.jpg') } alt="People making flower crowns"/>
            <img src={ require('./img/farm/butts.jpg') } alt="Two chicken backsides"/>
            <img src={ require('./img/farm/chickens.jpg') } alt="Chickens under the tree"/>
            <img src={ require('./img/farm/nugget.jpg') } alt="Buff orpington walking past chicken coop"/>
            <img src={ require('./img/farm/orpington.jpg') } alt="Buff orpington in golden hour"/>
            <img src={ require('./img/farm/orpington2.jpg') } alt="Buff orpington walking past chicken coop"/>
            <img src={ require('./img/farm/sexlink.jpg') } alt="Orange chicken walking past chicken coop"/>
            <img src={ require('./img/farm/ari.jpg') } alt="Orange chicken walking past chicken coop"/>
            <img src={ require('./img/farm/jason.jpg') } alt="Jason with a flower crown :)"/>
        </div>
    );
};

export default FarmPage;