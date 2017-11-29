import React from 'react';
import {Title, List, ListItem} from '../../shared/categoryStyles';
import BackButton from '../common/BackButton/BackButton.jsx'

class Ontwerpend extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title davidoff>
          <BackButton value="<"/>
          Ontwikkelend
        </Title>
        <List>
          <ListItem>
            Technische kennis en analyse
          </ListItem>
          <ListItem>
            Ontwikkelen en prototypen
          </ListItem>
          <ListItem>
            Testen en implementeren
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Ontwerpend;
