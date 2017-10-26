import React, {PropTypes} from 'react';
// Styled
import {Title, DoubleBlockContainer, BlockContainer, Block} from './styled/styles.js';

function App({}) {
  return (
    <div>
      <Title>
        Ivo's
      </Title>

      <DoubleBlockContainer>

        <BlockContainer>
          <Block>
            Ondernemende Technoloog
          </Block>
        </BlockContainer>
        <BlockContainer>
          <Block>
            Betrokken Technoloog
          </Block>
        </BlockContainer>

      </DoubleBlockContainer>
      <DoubleBlockContainer>

        <BlockContainer>
          <Block>
            Ontwerpende Technoloog
          </Block>
        </BlockContainer>
        <BlockContainer>
          <Block>
            Onderzoekende Technoloog
          </Block>
        </BlockContainer>

      </DoubleBlockContainer>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
