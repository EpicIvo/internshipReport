import React from 'react';
import {Title, List, ListItem} from '../../../shared/categoryStyles';

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
            Lerend vermogen
          </ListItem>
        </List>
      </div>
    );
  }
}

export default Betrokken;
