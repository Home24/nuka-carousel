'use strict';

import Carousel from '../src/carousel';
import React from 'react';
import ReactDom from 'react-dom';
import classnames from 'classnames';


window.React = React;

const App = React.createClass({
  mixins: [Carousel.ControllerMixin],

  getInitialState() { return { slideIndex: 0, highlightedSlide: 0 }; },
  getDefaultProps() {
    return {
      images: [
        "http://placehold.it/100x100&text=slide1",
        "http://placehold.it/100x100&text=slide2",
        "http://placehold.it/100x100&text=slide3",
        "http://placehold.it/100x100&text=slide4",
        "http://placehold.it/100x100&text=slide5",
        "http://placehold.it/100x100&text=slide6",
        "http://placehold.it/100x100&text=slide7",
        "http://placehold.it/100x100&text=slide8",
        "http://placehold.it/100x100&text=slide9"
      ]
    }
  },
  onMouseOver(index) {
    this.setState({ highlightedSlide: index });
  },
  getThumbnails() {
    const { images } = this.props;
    const { highlightedSlide } = this.state;

    return images.map((img, index) => {
      const onMouseOver = this.onMouseOver.bind(this, index);
      const classNames = classnames(
        'article-gallery__thumbnail',
        {
          'article-gallery__thumbnail--selected': (index === highlightedSlide)
        }
      );

      return (
        <div
          key={index}
          className={classNames}
          onMouseOver={onMouseOver}
        >
          <img src={img} />
        </div>
      );
    });
  },
  render() {
    return (
      <div style={{width: '50%', margin: 'auto'}}>
        <Carousel
          ref="carousel"
          data={this.setCarouselData.bind(this, 'carousel')}
          slideIndex={this.state.slideIndex}
          slidesToShow={2}
          slidesToScroll={2}
          afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
          {this.getThumbnails()}
        </Carousel>
        <button onClick={() => this.setState({ slideIndex: 0 })}>1</button>
        <button onClick={() => this.setState({ slideIndex: 1 })}>2</button>
        <button onClick={() => this.setState({ slideIndex: 2 })}>3</button>
        <button onClick={() => this.setState({ slideIndex: 3 })}>4</button>
        <button onClick={() => this.setState({ slideIndex: 4 })}>5</button>
        <button onClick={() => this.setState({ slideIndex: 5 })}>6</button>
      </div>
    )
  }
});

const content = document.getElementById('content');

ReactDom.render(<App/>, content)
