'use strict';

import Carousel from '../src/carousel';
import React from 'react';
import ReactDom from 'react-dom';

window.React = React;

const App = React.createClass({
  mixins: [Carousel.ControllerMixin],

  getInitialState() { return { slideIndex: 0 }; },

  render() {
    return (
      <div style={{width: '50%', margin: 'auto'}}>
        <Carousel
          ref="carousel"
          data={this.setCarouselData.bind(this, 'carousel')}
          slideIndex={this.state.slideIndex}
          slidesToShow={2}
          slidesToScroll={2}
          lazyLoading
          afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
          <img src="http://placehold.it/1000x400&text=slide0"/>
          <img src="http://placehold.it/1000x400&text=slide1"/>
          <img src="http://placehold.it/1000x400&text=slide2"/>
          <img src="http://placehold.it/1000x400&text=slide3"/>
          <img src="http://placehold.it/1000x400&text=slide4"/>
          <img src="http://placehold.it/1000x400&text=slide5"/>
          <img src="http://placehold.it/1000x400&text=slide6"/>
          <img src="http://placehold.it/1000x400&text=slide7"/>
          <img src="http://placehold.it/1000x400&text=slide8"/>
          <img src="http://placehold.it/1000x400&text=slide9"/>
          <img src="http://placehold.it/1000x400&text=slide10"/>
        </Carousel>
        <button onClick={() => this.setState({ slideIndex: 0 })}>0</button>
        <button onClick={() => this.setState({ slideIndex: 1 })}>1</button>
        <button onClick={() => this.setState({ slideIndex: 2 })}>2</button>
        <button onClick={() => this.setState({ slideIndex: 3 })}>3</button>
        <button onClick={() => this.setState({ slideIndex: 4 })}>4</button>
        <button onClick={() => this.setState({ slideIndex: 5 })}>5</button>
      </div>
    )
  }
});

const content = document.getElementById('content');

ReactDom.render(<App/>, content)
