import React from 'react';
import {Title, List, ListItem} from '../../shared/categoryStyles';
// Components
import BackButton from '../common/BackButton/BackButton.jsx'

class Ondernemend extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title ondernemend>
          <BackButton value="<"/>
          Ondernemend
        </Title>
        <List>
          <ListItem>
            Ondernemende houding
          </ListItem>
          <ListItem>
            Ondernemende vaardigheden
          </ListItem>
          <ListItem>
            Projectmatig werken
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Ondernemend;
