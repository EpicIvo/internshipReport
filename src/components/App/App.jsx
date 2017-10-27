import React, {PropTypes} from 'react';
// Styled
import {Title, DoubleBlockContainer, BlockContainer, Block, BlockText} from './styles/styles.js';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title>
          Ivo's
        </Title>

        <DoubleBlockContainer>

          <BlockContainer>
            <Block onClick={() => {this.props.history.push("/ondernemend");}}>
              <BlockText>
                Ondernemende <br/> Technoloog
              </BlockText>
            </Block>
          </BlockContainer>
          <BlockContainer>
            <Block onClick={() => {this.props.history.push("/betrokken");}}>
              <BlockText>
                Betrokken <br/> Technoloog
              </BlockText>
            </Block>
          </BlockContainer>

        </DoubleBlockContainer>
        <DoubleBlockContainer>

          <BlockContainer>
            <Block onClick={() => {this.props.history.push("/ontwerpende");}}>
              <BlockText>
                Ontwerpende <br/> Technoloog
              </BlockText>
            </Block>
          </BlockContainer>
          <BlockContainer>
            <Block onClick={() => {this.props.history.push("/onderzoekend");}}>
              <BlockText>
                Onderzoekende <br/> Technoloog
              </BlockText>
            </Block>
          </BlockContainer>

        </DoubleBlockContainer>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
