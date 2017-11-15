import React from 'react';
// styles
import {Title, Content, SubTitle} from './shared-styles/styles.js';

class Ninlaro extends React.Component{
  constructor(){
    super();
  }

  render(){
    return(
      <div>
        <Title ninlaro>
          Ninlaro
        </Title>
        <Content>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </Content>
        <SubTitle ninlaro>
          >_ Subtitle
        </SubTitle>
        <Content>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
        </Content>
        <SubTitle ninlaro>
          >_ Subtitle
        </SubTitle>
      </div>
    )
  }
}

export default Ninlaro;
