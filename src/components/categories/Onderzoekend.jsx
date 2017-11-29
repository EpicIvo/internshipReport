import React from 'react';
import {Title, List, ListItem} from '../../shared/categoryStyles';
// Components
import BackButton from '../common/BackButton/BackButton.jsx'

class Onderzoekend extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title onderzoekend>
          <BackButton value="<"/>
          Onderzoekend
        </Title>
        <List>
          <ListItem>
            Onderzoeken en analyseren
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Onderzoekend;
