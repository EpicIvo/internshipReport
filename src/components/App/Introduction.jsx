import React from 'react';
import PropTypes from 'prop-types';
// Styles
import {HeaderImage, IntroductionParagraph, Site, ScrollButton} from './styles/introduction-styles';

class Introduction extends React.Component {
  constructor(props) {
    super(props);
  }

  scroll() {
    //const height = document.documentElement.clientHeight;
    scrollTo(1000, 0);
  }

  render() {
    return (<div>
      <HeaderImage/>
      <div>
        <IntroductionParagraph>
          Hi there!
          <br/>
          <br/>
          Ik ben Ivo van der Knaap. Het afgelopen halfjaar heb ik stage gelopen bij&nbsp;
          <Site
            href='https://www.burst-digital.com/'
            target='_blank'
          >Burst</Site>.
          Op deze website vertel ik mijn verhaal!
          <br/>
          <br/>
          Burst is een digitaal bureau dat data, creativiteit en technologie combineert. Net als haar klanten heeft Burst een holistische kijk en beweegt mee met de veranderende consumentenbehoefte.
          <ScrollButton onClick={() => scroll(0, 1000)}>
            ‹
          </ScrollButton>
        </IntroductionParagraph>
      </div>
    </div>);
  }
}

Introduction.PropTypes = {};

export default Introduction;
