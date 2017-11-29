import glamorous from 'glamorous';
// Global Styles
import { colors } from './globalStyles';
// Images
import davidoffBackground from '../images/davidoff.jpeg';

const Title = glamorous.h1({
  backgroundImage: `url(${davidoffBackground})`,
  color: colors.projects.davidoff,
  borderBottom: `8px solid ${colors.projects.davidoff}`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  fontFamily: 'Avenir next',
  fontSize: '6em',
  padding: '2%',
  fontWeight: 'bold',
  height: '25vh',
  lineHeight: '25vh',
  textAlign: 'center',
  marginBottom: '10vh'
});

const List = glamorous.ul({
  width: '100%',
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
