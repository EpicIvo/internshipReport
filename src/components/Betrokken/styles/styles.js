import glamorous from 'glamorous';
// Global Styles
import { colors } from '../../../shared/globalStyles.js';

const Title = glamorous.h1({
  fontFamily: 'Avenir next',
  fontWeight: 'bold',
  fontSize: '6em',
  margin: '0',
  padding: '1%',
  color: colors.general.orange,
  ':hover': {
    cursor: 'pointer',
  }
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
