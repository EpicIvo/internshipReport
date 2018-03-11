import React from 'react';
import PropTypes from 'prop-types';
// Styles
import {HeaderImage, IntroductionParagraph, Site, ScrollButton, ScrollButtonIcon} from './styles/introduction-styles';

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
            href='/general/burst'
          >Burst</Site>.
          Op deze website vertel ik mijn verhaal! Lees hier de&nbsp;
          <Site
            href='/general/preface'
          >inleiding</Site> en uiteindelijk de&nbsp;
          <Site
            href='/general/conclusion'
          >conclusie</Site>!
          <br/>
          <br/>
          Lees&nbsp;
          <Site
            href='/general/research'
          >hier</Site> mijn herkansing voor onderzoeken!
          <ScrollButton>
            <ScrollButtonIcon onClick={() => scroll(0, 1000)}>
              ‹
            </ScrollButtonIcon>
          </ScrollButton>
        </IntroductionParagraph>
      </div>
    </div>);
  }
}

Introduction.PropTypes = {};

export default Introduction;
