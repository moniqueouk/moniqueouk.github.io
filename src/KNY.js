import React from "react";
import './css/Farm.css';

const KNY = () => {
    return (
        <div id="farmpics">
            <img src="https://lh3.googleusercontent.com/pw/AIL4fc8dMaNYtzgQsXz1lGtwAQChcWPT1N8PYR2emmd1Ev8lsyDVsjCziRxtys2_P2k2i8O_XwXSekRC9PbJpsk6943xie7ewTvuWoKuaYyyobO8lBTsmv9s-KtG5VqwJuZFsIf3kv6kmYv3uiSW0q8FRj4dBQ=w2868-h1912-s-no?authuser=0" alt="Sampors walking barefoot down an empty road"/>
            <img src={ require('./img/dylan.jpg') } alt="Dylan sitting in a field of flowers"/>
            <img src={ require('./img/kny/IMG_5997.jpg') } alt="Dylan and Sampors pointing at something, laughing"/>
            <img src={ require('./img/kny/IMG_5990.jpg') } alt="Cows on a hill"/>
        </div>
    );
};

export default KNY;