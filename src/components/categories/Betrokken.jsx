import React from 'react';
import {Title, List, ListItem} from '../../shared/categoryStyles';
// Components
import BackButton from '../common/BackButton/BackButton.jsx';

class Betrokken extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title betrokken>
          <BackButton value="<"/>
          Betrokken
        </Title>
        <List>
          <ListItem>
            Lerend vermogen
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Betrokken;
