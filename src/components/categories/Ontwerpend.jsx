import React from 'react';
import {Title, List, ListItem} from '../../shared/categoryStyles';

class Ontwerpend extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title onClick={() => {
          this.props.history.push("/")
        }}>
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
