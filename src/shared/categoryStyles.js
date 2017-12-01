import glamorous from 'glamorous';
import propStyles from 'prop-styles';
// Global Styles
import {colors} from './globalStyles';
// Images
import alwaysBeCoding from '../images/categories/alwaysBeCoding.jpg';
import research from '../images/categories/research.jpeg';
import designProcess from '../images/categories/designProcess.png';
import entrepreneur from '../images/categories/entrepreneur.jpeg';
import sunsetFecamp from '../images/categories/sunsetFecamp.jpg';

const Title = glamorous.h1(
  propStyles({
    category: {
      fontSize: '6em',
      margin: '0 0 10vh 0'
    },
    criteria: {
      fontSize: '4em',
      margin: '0'
    },
    ontwikkelend: {
      backgroundImage: `url(${alwaysBeCoding})`,
      color: colors.general.white,
    },
    onderzoekend: {
      backgroundImage: `url(${research})`,
      color: colors.general.gray,
    },
    ontwerpend: {
      backgroundImage: `url(${designProcess})`,
      color: colors.general.darkBlue,
    },
    ondernemend: {
      backgroundImage: `url(${entrepreneur})`,
      color: colors.general.white,
    },
    betrokken: {
      backgroundImage: `url(${sunsetFecamp})`,
      color: colors.general.white,
    }
  }),
  {
    borderBottom: `8px solid ${colors.general.gray}`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Avenir next',
    padding: '4%',
    fontWeight: 'bold',
    height: '25vh',
    lineHeight: '25vh',
    textAlign: 'center',
  }
);

const List = glamorous.ul({
  padding: '2% 0 0 5%',
});

const ListItem = glamorous.li({
  fontFamily: 'Avenir Next',
  fontSize: '3em',
  color: colors.general.darkBlue,
  padding: '1% 0 0 0',
  transitionDuration: '0.4s',
  cursor: 'pointer',
  ':before': {
    content: '">_ "',
    color: colors.general.orange
  },
  ':hover': {
    padding: '1% 0 0 2%',
  }
});

export {Title, List, ListItem};
