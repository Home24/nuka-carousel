'use strict';

import Carousel from '../src/carousel';
import React from 'react';
import ReactDom from 'react-dom';
import '../src/assets/styles.scss';
import { MobilePagination } from '../src/decorators';

window.React = React;

const App = React.createClass({
  mixins: [Carousel.ControllerMixin],

  getInitialState() { return { slideIndex: 0 }; },

  render() {
    return (
      <div>
        <Carousel
          ref="carousel"
          data={this.setCarouselData.bind(this, 'carousel')}
          slideIndex={this.state.slideIndex}
          slidesToShow={1}
          slidesToScroll={1}
          lazyLoading
          decorators={[MobilePagination]}
          afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
          <img src="http://placehold.it/300x300&text=slide0"/>
          <img src="http://placehold.it/300x300&text=slide1"/>
          <img src="http://placehold.it/300x300&text=slide2"/>
          <img src="http://placehold.it/300x300&text=slide3"/>
          <img src="http://placehold.it/300x300&text=slide4"/>
          <img src="http://placehold.it/300x300&text=slide5"/>
          <img src="http://placehold.it/300x300&text=slide6"/>
          <img src="http://placehold.it/300x300&text=slide7"/>
          <img src="http://placehold.it/300x300&text=slide8"/>
          <img src="http://placehold.it/300x300&text=slide9"/>
          <img src="http://placehold.it/300x300&text=slide10"/>
        </Carousel>
      </div>
    )
  }
});

const content = document.getElementById('content');

ReactDom.render(<App/>, content)
