require('./Scrollbar.css');
require('../lib/swiper.min.css');
let Swiper_Scrollbar = require('../lib/swiper.min.js');
import React from 'react';

class Scrollbar extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        new Swiper_Scrollbar('.lb2', {
            scrollbar: '.swiper-scrollbar',
            scrollbarHide: true,
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 10
        });
    }
    render() {
        return (
            <div className="info">
                <div className="swiper-container lb2">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">Slide 1</div>
                        <div className="swiper-slide">Slide 2</div>
                        <div className="swiper-slide">Slide 3</div>
                        <div className="swiper-slide">Slide 4</div>
                        <div className="swiper-slide">Slide 5</div>
                        <div className="swiper-slide">Slide 6</div>
                        <div className="swiper-slide">Slide 7</div>
                        <div className="swiper-slide">Slide 8</div>
                        <div className="swiper-slide">Slide 9</div>
                        <div className="swiper-slide">Slide 10</div>
                    </div>
                    <div className="swiper-scrollbar"></div>
                </div>
            </div>

        );
    }
}

module.exports = Scrollbar;
