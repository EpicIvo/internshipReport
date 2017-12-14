import glamorous from 'glamorous';
import propStyles from 'prop-styles';
// Global Styles
import {colors} from './globalStyles.js';
// Images
import ninlaroBackground from '../images/ninlaro.jpg';
import davidoffBackground from '../images/davidoff.jpeg';
import mentosBackground from '../images/mentos.png';
import heroBackground from '../images/hero.jpg';
import schwartauBackground from '../images/schwartau.jpg';

const Title = glamorous.div(
  propStyles({
    ninlaro: {
      backgroundImage: `url(${ninlaroBackground})`,
      color: colors.projects.ninlaro,
      borderBottom: `8px solid ${colors.projects.ninlaro}`
    },
    davidoff: {
      backgroundImage: `url(${davidoffBackground})`,
      color: colors.projects.davidoff,
      borderBottom: `8px solid ${colors.projects.davidoff}`
    },
    mentos: {
      backgroundImage: `url(${mentosBackground})`,
      color: colors.projects.mentos,
      borderBottom: `8px solid ${colors.projects.mentos}`
    },
    hero: {
      backgroundImage: `url(${heroBackground})`,
      color: colors.projects.hero,
      borderBottom: `8px solid ${colors.projects.hero}`
    },
    schwartau: {
      backgroundImage: `url(${schwartauBackground})`,
      color: colors.projects.schwartau,
      borderBottom: `8px solid ${colors.projects.schwartau}`
    },
  }),
  {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    fontFamily: 'Avenir next',
    fontSize: '6em',
    padding: '2%',
    fontWeight: 'bold',
    height: '25vh',
    lineHeight: '25vh',
    textAlign: 'center',
    marginBottom: '5vh'
  });

const DetailPageTopBar = glamorous.div({
  width: '100%',
  textAlign: 'center',
  margin: '0 0 5vh 0',
});

const Content = glamorous.div({
  fontFamily: 'Avenir next',
  fontSize: '1.5em',
  padding: '0 20% 0 20%',
  textAlign: 'justify',
  lineHeight: '1.1',
});

const SubTitle = glamorous.h2(
  propStyles({
    ninlaro: {
      color: colors.projects.ninlaro,
    },
    davidoff: {
      color: colors.projects.davidoff,
    },
    mentos: {
      color: colors.projects.mentos,
    },
    hero: {
      color: colors.projects.hero,
    },
    schwartau: {
      color: colors.projects.schwartau,
    },
  }),
  {
    fontFamily: 'Avenir next',
    fontSize: '2em',
    padding: '2% 0 2% 22%',
    fontWeight: 'bold',
  });

const CirteriaTitle = glamorous.h2({
  color: colors.general.gray,
  fontFamily: 'Avenir next',
  fontSize: '1.5em',
  padding: '0.5% 0 2% 18%',
  fontWeight: 'bold',
});

const Quote = glamorous.div({
  fontFamily: 'Avenir next',
  fontSize: '1.2em',
  fontStyle: 'italic',
  padding: '0 20% 0 20%',
  textAlign: 'center',
  lineHeight: '1.1',
});

export {
  Title,
  DetailPageTopBar,
  Content,
  SubTitle,
  CirteriaTitle,
  Quote
}
