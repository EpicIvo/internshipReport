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
  fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
  fontSmoothing: 'antialiased',
  fontSize: '1.2em',
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
})

const ScrollButtonIcon = glamorous.div({
  display: 'inline-block',
  ':hover': {
    cursor: 'pointer'
  }
})

export {
  HeaderImage,
  IntroductionParagraph,
  Site,
  ScrollButton,
  ScrollButtonIcon
}
