import glamorous from 'glamorous';
import propStyles from 'prop-styles';
// Global Styles
import { colors } from '../../../shared/globalStyles.js';
// Images
import ninlaro from '../../../images/ninlaro.jpg';
import davidoff from '../../../images/davidoff.jpeg';
import mentos from '../../../images/mentos.png';
import hero from '../../../images/hero.jpg';
import schwartau from '../../../images/schwartau.jpg';

const AppContainer = glamorous.div({
  backgroundColor: colors.general.background,
  height: '99.5vh',
  borderTop: `0.5vh solid ${colors.general.orange}`,
  zIndex: '-20'
});

const TopBar = glamorous.div({
  width: '100%',
  textAlign: 'center',
  margin: '1% 0 5% 0',
  paddingTop: '2vh',
});

const MenuItem = glamorous.div({
  fontFamily: 'Avenir Next',
  fontSize: '2em',
  textAlign: 'center',
  color: colors.general.orange,
  margin: '0 2% 0 2%',
  display: 'inline-block',
  transitionDuration: '0.4s',
  ':hover': {
    color: colors.general.lightBlue,
    cursor: 'pointer'
  }
});

const Title = glamorous.h1({
  fontFamily: 'Avenir Next',
  fontSize: '3.5em',
  textAlign: 'center',
  color: colors.general.gray,
  margin: '0 5% 0 5%',
  display: 'inline-block'
});

const DoubleBlockContainer = glamorous.div({
  textAlign: 'center',
});

const BlockContainer = glamorous.div({
  width: '22.5%',
  padding: '0 0 50px 0',
  display: 'inline-block'
});

const Block = glamorous.div(
  propStyles({
    ninlaro: {
      backgroundImage: `url(${ninlaro})`,
      color: colors.projects.ninlaro,
      ':hover': {
        color: colors.general.white,
      }
    },
    davidoff: {
      backgroundImage: `url(${davidoff})`,
      color: colors.projects.davidoff,
      ':hover': {
        color: colors.general.white,
      }
    },
    mentos: {
      backgroundImage: `url(${mentos})`,
      color: colors.projects.mentos,
      ':hover': {
        color: colors.general.white,
      }
    },
    hero: {
      backgroundImage: `url(${hero})`,
      color: colors.projects.hero,
      ':hover': {
        color: colors.general.white,
      }
    },
    schwartau: {
      backgroundImage: `url(${schwartau})`,
      color: colors.general.gray,
      ':hover': {
        color: colors.general.white,
      }
    },
  }),
  {
    display: 'inline-block',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '80%',
    height: '20vh',
    textAlign: 'center',
    borderRadius: '25px',
    border: `2px solid ${colors.general.lime}`,
    overflow: 'hidden',
    transitionDuration: '0.3s',
    boxShadow: '10px 10px 15px rgba(163,175,191,1)',
    ':hover': {
      backgroundColor: colors.general.lime,
      border: `2px solid ${colors.general.gray}`,
      transform: 'Scale(1.1)',
      cursor: 'pointer',
      boxShadow: '16px 16px 20px rgba(163,175,191,1)',
      filter: 'grayscale(50%)',
    }
  });

const BlockText = glamorous.div({
  fontFamily: 'Avenir Next',
  fontSize: '2em',
  fontWeight: 'bold',
  lineHeight: '20vh'
});

// EXPORTS
export {
  AppContainer,
  TopBar,
  MenuItem,
  Title,
  DoubleBlockContainer,
  BlockContainer,
  Block,
  BlockText
};
