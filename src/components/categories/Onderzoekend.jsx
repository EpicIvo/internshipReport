import React from 'react';
import {Title, List, ListItem} from '../../shared/categoryStyles';

class Onderzoekend extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title onClick={() => {
          this.props.history.push("/")
        }}>
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
