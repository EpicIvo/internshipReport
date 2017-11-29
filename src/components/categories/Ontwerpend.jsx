import React from 'react';
import {Title, List, ListItem} from '../../shared/categoryStyles';
// Components
import BackButton from '../common/BackButton/BackButton.jsx'

class Ontwerpend extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title ontwerpend>
          <BackButton value="<"/>
          Ontwerpend
        </Title>
        <List>
          <ListItem>
            Conceptualiseren
          </ListItem>
          <ListItem>
            Ontwerpen en prototypen
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Ontwerpend;
