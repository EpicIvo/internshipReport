import glamorous from 'glamorous';

const Title = glamorous.h1({
  fontFamily: 'Avenir Next',
  fontSize: '30pt',
  textAlign: 'center',
  width: '100%',
  color: '#2e2e2e',
  marginTop: '2vh',
});

const DoubleBlockContainer = glamorous.div({
  textAlign: 'center',
});

const BlockContainer = glamorous.div({
  width: '50%',
  padding: '0 0 50px 0',
  display: 'inline-block'
});

const Block = glamorous.div({
  display: 'inline-block',
  backgroundColor: '#2e2e2e',
  color: '#ffffff',
  width: '80%',
  height: '40vh',
  textAlign: 'center',
  borderRadius: '25px',
  border: '2px solid #38FF87',
  overflow: 'hidden',
  transitionDuration: '0.3s',
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
  fontSize: '42pt',
  marginTop: '15vh',
});

export {Title, DoubleBlockContainer, BlockContainer, Block, BlockText};
