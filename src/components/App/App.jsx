import React, {PropTypes} from 'react';
import {Link} from 'react-router';
// Styled
import {AppContainer, TopBar, CategoryItem, Title, DoubleBlockContainer, BlockContainer, Block, BlockText} from './styles/styles.js';

class App extends React.Component {
  constructor() {
    super();
    // Bindings
  }

  render() {
    return (
      <AppContainer>

        <Title>
          Ivo
        </Title>

        <TopBar>
          <Link to="/ontwikkelend">
            <CategoryItem>
              Ontwikkelend
            </CategoryItem>
          </Link>
          <Link to="/onderzoekend">
            <CategoryItem>
              Onderzoekend
            </CategoryItem>
          </Link>
          <Link to="/ontwerpend">
            <CategoryItem>
              Ontwerpend
            </CategoryItem>
          </Link>
          <Link to="/ondernemend">
            <CategoryItem>
              Ondernemend
            </CategoryItem>
          </Link>
          <Link to="/betrokken">
            <CategoryItem>
              Betrokken
            </CategoryItem>
          </Link>
        </TopBar>

        <DoubleBlockContainer>

          <BlockContainer>
            <Link to="/ninlaro">
              <Block ninlaro>
                <BlockText>
                  Ninlaro
                </BlockText>
              </Block>
            </Link>
          </BlockContainer>
          <BlockContainer>
            <Link to="/zino-davidoff">
              <Block davidoff>
                <BlockText>
                  Zino-davidoff
                </BlockText>
              </Block>
            </Link>
          </BlockContainer>

          <BlockContainer>
            <Link to="/mentos">
              <Block mentos>
                <BlockText>
                  Mentos
                </BlockText>
              </Block>
            </Link>
          </BlockContainer>
          <BlockContainer>
            <Link to="/hero">
              <Block hero>
                <BlockText>
                  Hero
                </BlockText>
              </Block>
            </Link>
          </BlockContainer>

        </DoubleBlockContainer>
        <DoubleBlockContainer>

          <BlockContainer>
            <Link to="/schwartau">
              <Block schwartau>
                <BlockText>
                  Schwartau
                </BlockText>
              </Block>
            </Link>
          </BlockContainer>
          <BlockContainer>
            <Link to="/onderzoekend">
              <Block>
                <BlockText>
                  CDSP
                </BlockText>
              </Block>
            </Link>
          </BlockContainer>

        </DoubleBlockContainer>
      </AppContainer>
    );
  }
}

App.propTypes = {};

export default App;
