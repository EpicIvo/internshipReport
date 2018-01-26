import glamorous from 'glamorous';
import propStyles from 'prop-styles';
// Global Styles
import {colors} from '../../../shared/globalStyles.js';
// Images
import ninlaro from '../../../images/ninlaro.jpg';
import davidoff from '../../../images/davidoff.jpeg';
import mentos from '../../../images/mentos.png';
import hero from '../../../images/hero.jpg';
import schwartau from '../../../images/schwartau.jpg';
import takeda from '../../../images/takeda.jpg';
import iffr from '../../../images/iffr.jpg';
import jgz from '../../../images/jgz.jpg';
import jamstudio from '../../../images/jamstudio.jpg';
import juvela from '../../../images/juvela.jpg';
import kritisch from '../../../images/blockchain.jpg';
import tickets from '../../../images/personal/teamMeeting.jpg';

const AppContainer = glamorous.div({
  backgroundColor: colors.general.white,
  height: '99.5vh',
  borderTop: `0.5vh solid ${colors.general.red}`,
  zIndex: '-20'
});

const TopBar = glamorous.div({
  width: '100%',
  textAlign: 'center',
  backgroundColor: colors.general.white,
  height: '12vh'
});

const Title = glamorous.h1({
  fontFamily: 'Avenir Next',
  fontSize: '4em',
  fontWeight: '700',
  color: colors.general.gray,
  margin: '1% 0 0 5%',
  display: 'inline-block',
  float: 'left',
  lineHeight: '8vh',
  height: '12vh'
});

const BurstLogo = glamorous.img({
  margin: '0 0 0 5%',
  display: 'inline-block',
  float: 'left',
  height: '12vh',
})

const Menu = glamorous.div({
  textAlign: 'right'
})

const CategoryItem = glamorous.div(
  propStyles({
    detailPage: {
      color: colors.general.white,
      backgroundColor: colors.general.gray,
      margin: '6vh 2% 6vh 2%',
      padding: '0 1% 0 1%',
    },
    frontPage: {
      color: colors.general.gray,
      height: '12vh',
      padding: '1%',
    }
  }),
  {
    fontFamily: 'Avenir Next',
    fontSize: '1.2em',
    textAlign: 'right',
    lineHeight: '8vh',
    display: 'inline-block',
    ':hover': {
      color: colors.general.red,
      cursor: 'pointer',
    }
  });

const DoubleBlockContainer = glamorous.div({
  textAlign: 'center',
  lineHeight: '0',
});

const BlockContainer = glamorous.div({
  width: '25%',
  display: 'inline-block',
  textAlign: 'center',
});

const BlockBackground = glamorous.div({
  backgroundColor: colors.general.red,
  opacity: 0,
  transitionDuration: '0.2s',
  ':hover': {
    opacity: 1,
  }
})

const Block = glamorous.div(
  propStyles({
    ninlaro: {
      backgroundImage: `url(${ninlaro})`,
    },
    davidoff: {
      backgroundImage: `url(${davidoff})`,
    },
    mentos: {
      backgroundImage: `url(${mentos})`,
    },
    hero: {
      backgroundImage: `url(${hero})`,
    },
    schwartau: {
      backgroundImage: `url(${schwartau})`,
    },
    takeda: {
      backgroundImage: `url(${takeda})`,
    },
    iffr: {
      backgroundImage: `url(${iffr})`,
    },
    jgz: {
      backgroundImage: `url(${jgz})`,
    },
    jamstudio: {
      backgroundImage: `url(${jamstudio})`,
    },
    juvela: {
      backgroundImage: `url(${juvela})`,
    },
    kritisch: {
      backgroundImage: `url(${kritisch})`,
    },
    tickets: {
      backgroundImage: `url(${tickets})`,
    },
  }),
  {
    borderStyle: 'none',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'inline-block',
    width: '100%',
    height: '25vh',
    overflow: 'hidden',
    opacity: 0.999,
  });

const BlockText = glamorous.div(
  propStyles({
    blockHover: {
      color: colors.general.white,
    }
  }),
  {
    color: colors.general.white,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Avenir Next',
    fontSize: '2em',
    fontWeight: 'bold',
    lineHeight: '25vh',
  });

// EXPORTS
export {
  AppContainer,
  TopBar,
  Title,
  BurstLogo,
  Menu,
  CategoryItem,
  DoubleBlockContainer,
  BlockContainer,
  BlockBackground,
  Block,
  BlockText
};
