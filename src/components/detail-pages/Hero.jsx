import React from 'react';
// stlyes
import {Title, Content} from './../../shared/detailStyles.js';
// Components
import BackButton from '../common/BackButton/BackButton.jsx';

class Hero extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title hero>
          <BackButton icon="<" path="/"/>
          Hero
        </Title>
        <Content>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </Content>
      </div>
    )
  }
}

export default Hero;
