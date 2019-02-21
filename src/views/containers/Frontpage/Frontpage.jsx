import React, { Component } from 'react';
import * as basicScroll from 'basicscroll';
import foreground from './images/foreground.png';
import middleground from './images/middleground.png';
import background from './images/background.png';

document.querySelectorAll('.scene').forEach((elem) => {
  const modifier = elem.getAttribute('data-modifier');

  basicScroll.create({
    elem,
    from: 0,
    to: 519,
    direct: true,
    props: {
      '--translateY': {
        from: '0',
        to: `${ 10 * modifier }px`,
      },
    },
  }).start();
});

class Frontpage extends Component {
  render() {
    return (
      <div className="page page-frontpage">
        <img className="scene" data-modifier="30" src={background} alt="background"/>
        <img className="scene" data-modifier="18" src={middleground} alt="middleground"/>
        <img className="scene" data-modifier="12" src={foreground} alt="foreground"/>
      </div>
    );
  }
}

export default Frontpage;
