import glamorous from 'glamorous';
import propStyles from 'prop-styles';
// Global Styles
import {colors} from '../../../shared/globalStyles.js';
// Images
import headerImage from '../../../images/personal/header-image.jpg';

const HeaderImage = glamorous.div({
  backgroundImage: `url(${headerImage})`,
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '40vh',
});

const IntroductionParagraph = glamorous.div({
  fontFamily: 'Avenir Next',
  fontSize: '1.2em',
  fontWeight: '600',
  lineHeight: '1.2',
  textAlign: 'center',
  padding: '4% 25%',
  height: '35vh',
  color: colors.general.gray,
  backgroundColor: colors.general.white
})

const Site = glamorous.a({
  textDecoration: 'underline',
  color: colors.general.gray,
  fontWeight: '700',
})

const ScrollButton = glamorous.div({
  padding: '6% 0',
  transform: 'rotate(270deg)',
  fontFamily: 'Avenir Next',
  fontSize: '4em',
  fontWeight: '600',
  ':hover': {
    cursor: 'pointer'
  }
})

export {
  HeaderImage,
  IntroductionParagraph,
  Site,
  ScrollButton
}
