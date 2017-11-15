import React, {PropTypes} from 'react';
// Styled
import {AppContainer, TopBar, MenuItem, Title, DoubleBlockContainer, BlockContainer, Block, BlockText} from './styles/styles.js';

class App extends React.Component {
  constructor() {
    super();
    // Bindings
  }

  render() {
    return (
      <AppContainer>

        <TopBar>
          <MenuItem
            onClick={() => {
              this.props.history.push("/ondernemend");
            }}>
            Ondernemend
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.props.history.push("/betrokken");
            }}>
            Betrokken
          </MenuItem>
          <Title>
            Ivo
          </Title>
          <MenuItem
            onClick={() => {
              this.props.history.push("/onderzoekend");
            }}>
            Onderzoekend
          </MenuItem>
          <MenuItem
            onClick={() => {
              this.props.history.push("/ontwerpend");
            }}>
            Ontwerpend
          </MenuItem>
        </TopBar>

        <DoubleBlockContainer>

          <BlockContainer>
            <Block
              onClick={() => {
                this.props.history.push("/ninlaro");
              }}
              ninlaro>
              <BlockText>
                Ninlaro
              </BlockText>
            </Block>
          </BlockContainer>
          <BlockContainer>
            <Block onClick={() => {
              this.props.history.push("/zino-davidoff");
            }} davidoff>
              <BlockText>
                Zino-davidoff
              </BlockText>
            </Block>
          </BlockContainer>

          <BlockContainer>
            <Block
              onClick={() => {
                this.props.history.push("/mentos");
              }} mentos>
              <BlockText>
                Mentos
              </BlockText>
            </Block>
          </BlockContainer>
          <BlockContainer>
            <Block onClick={() => {
              this.props.history.push("/hero");
            }} hero>
              <BlockText>
                Hero
              </BlockText>
            </Block>
          </BlockContainer>

        </DoubleBlockContainer>
        <DoubleBlockContainer>

          <BlockContainer>
            <Block onClick={() => {
              this.props.history.push("/schwartau");
            }} schwartau>
              <BlockText>
                Schwartau
              </BlockText>
            </Block>
          </BlockContainer>
          <BlockContainer>
            <Block onClick={() => {
              this.props.history.push("/onderzoekend");
            }}>
              <BlockText>
                CDSP
              </BlockText>
            </Block>
          </BlockContainer>

        </DoubleBlockContainer>
      </AppContainer>
    );
  }
}

App.propTypes = {};

export default App;
