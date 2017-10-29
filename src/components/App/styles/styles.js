import glamorous from 'glamorous';

const AppContainer = glamorous.div({
  backgroundColor: '#E8E9EB',
  height: '99.5vh',
  borderTop: '0.5vh solid #f06543',
  zIndex: '-20'
});

const ColorfulBG = glamorous.div({
  backgroundColor: '#F06543',
  position: 'absolute',
  width: '80%',
  height: '60vh',
  zIndex: '-1'
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
  color: '#F06543',
  margin: '0 2% 0 2%',
  display: 'inline-block',
  transitionDuration: '0.4s',
  ':hover': {
    color: '#91a6FF',
    cursor: 'pointer'
  }
});

const Title = glamorous.h1({
  fontFamily: 'Avenir Next',
  fontSize: '3.5em',
  textAlign: 'center',
  color: '#2e2e2e',
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

const Block = glamorous.div({
  display: 'inline-block',
  backgroundColor: '#2e2e2e',
  color: '#38FF87',
  width: '80%',
  height: '20vh',
  textAlign: 'center',
  borderRadius: '25px',
  border: '2px solid #38FF87',
  overflow: 'hidden',
  transitionDuration: '0.3s',
  boxShadow: '10px 10px 15px rgba(163,175,191,1)',
  ':hover': {
    backgroundColor: '#38FF87',
    border: '2px solid #2e2e2e',
    color: '#2e2e2e',
    transform: 'Scale(1.1)',
    cursor: 'pointer',
  }
});

const BlockText = glamorous.div({
  fontFamily: 'Avenir Next',
  fontSize: '1.5em',
  lineHeight: '20vh'
});

export {AppContainer, ColorfulBG, TopBar, MenuItem, Title, DoubleBlockContainer, BlockContainer, Block, BlockText};
