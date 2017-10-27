import glamorous from 'glamorous';

const Title = glamorous.h1({
  fontFamily: 'Avenir next',
  fontWeight: 'bold',
  fontSize: '6em',
  margin: '0',
  padding: '1%',
  color: '#f06543',
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
  color: '#3C6E71',
  padding: '1% 0 0 0',
  transitionDuration: '0.4s',
  cursor: 'pointer',
  ':before': {
    content: '">_ "',
    color: "#F06543"
  },
  ':hover': {
    padding: '1% 0 0 2%',
  }
});

export {Title, List, ListItem};
