import React from 'react';
import {Title, List, ListItem} from '../../../shared/categoryStyles';

class Ondernemend extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title onClick={() => {
          this.props.history.push("/")
        }}>
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
