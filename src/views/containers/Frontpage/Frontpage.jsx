import React, { Component } from 'react';
import * as basicScroll from 'basicscroll';
import ScrollReveal from 'scrollreveal';
import first from './images/first.png';
import second from './images/second.png';
import third from './images/third.png';

class Frontpage extends Component {
  componentDidMount() {
    document.querySelectorAll('.scene')
      .forEach((elem) => {
        const modifier = elem.getAttribute('data-modifier');

        basicScroll.create({
          elem,
          from: 0,
          to: 1000,
          direct: true,
          props: {
            '--translateY': {
              from: '0',
              to: `${10 * modifier}px`,
            },
          },
        })
          .start();
      });

    const slideUp = {
      distance: '300px',
      origin: 'bottom',
      opacity: 0,
      duration: 1200,
      reset: true,
      easing: 'ease',
      viewOffset: {
        bottom: 300,
      },
    };

    const slideUpDelayed = {
      distance: '300px',
      origin: 'bottom',
      opacity: 0,
      duration: 1200,
      reset: true,
      easing: 'ease',
      viewOffset: {
        bottom: 300,
      },
      delay: 100,
    };

    ScrollReveal()
      .reveal('.slide-up', slideUp);

    ScrollReveal()
      .reveal('.slide-up-delayed', slideUpDelayed);
  }

  render() {
    return (
      <div className="page page-frontpage">
        <div className="anim">
          <h1 className="anim__title slide-up">FeST Challenge 03.</h1>
          <div className="anim__scenes">
            <img className="scene" data-modifier="40" src={first} alt="background"/>
            <img className="scene scene--second" data-modifier="30" src={second} alt="middleground"/>
            <img className="scene scene--third" data-modifier="10" src={third} alt="foreground"/>
          </div>
        </div>

        <div className="cards">
          <div className="card slide-up">
            <img src="https://picsum.photos/500/300?image=322" alt="alt tag"/>
            <h2 className="card__title">This is a card</h2>
          </div>

          <div className="card slide-up-delayed">
            <img src="https://picsum.photos/500/300?image=839" alt="alt tag"/>
            <h2 className="card__title">This is a card</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Frontpage;
