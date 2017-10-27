import React from 'react';
import {Title, List, ListItem} from './styles/styles';

class Betrokken extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title onClick={() => {
          this.props.history.push("/")
        }}>
          Betrokken
        </Title>
        <List>
          <ListItem>
            List item uno
          </ListItem>
          <ListItem>
            List item dos
          </ListItem>
          <ListItem>
            List item tres
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Betrokken;
