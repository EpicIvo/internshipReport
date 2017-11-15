import glamorous from 'glamorous';
import propStyles from 'prop-styles';
// Images
import ninlaroBackground from '../../../images/ninlaro.jpg';
import davidoffBackground from '../../../images/davidoff.jpeg';
import mentosBackground from '../../../images/mentos.png';
import heroBackground from '../../../images/hero.jpg';
import schwartauBackground from '../../../images/schwartau.jpg';

const Title = glamorous.div(
  propStyles({
    ninlaro: {
      backgroundImage: `url(${ninlaroBackground})`,
      color: '#EF7622',
    },
    davidoff: {
      backgroundImage: `url(${davidoffBackground})`,
      color: '#1D1E2A',
    },
    mentos: {
      backgroundImage: `url(${mentosBackground})`,
      color: '#2C2D87',
    },
    hero: {
      backgroundImage: `url(${heroBackground})`,
      color: '#00318b',
    },
    schwartau: {
      backgroundImage: `url(${schwartauBackground})`,
      color: '#C8102E',
    },
  }),
  {
    fontFamily: 'Avenir next',
    fontSize: '6em',
    padding: '2%',
    fontWeight: 'bold',
    height: '25vh',
    lineHeight: '25vh',
    textAlign: 'center',
    marginBottom: '10vh'
  });

const Content = glamorous.div({
  fontFamily: 'Avenir next',
  fontSize: '2em',
  padding: '0 4% 0 4%',
  textAlign: 'justify',
  lineHeight: '1.1',
});

const SubTitle = glamorous.h2(
  propStyles({
    ninlaro: {
      color: '#EF7622',
    },
    davidoff: {
      color: '#1D1E2A',
    },
    mentos: {
      color: '#2C2D87',
    },
    hero: {
      color: '#00318b',
    },
    schwartau: {
      color: '#C8102E',
    },
  }),
  {
    fontFamily: 'Avenir next',
    fontSize: '2em',
    padding: '2%',
    fontWeight: 'bold',
  });

export {
  Title,
  Content,
  SubTitle
}
