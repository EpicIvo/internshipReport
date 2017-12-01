import React from 'react';
import {Title, List, ListItem} from '../../shared/categoryStyles';
import {Link} from 'react-router';
// Components
import BackButton from '../common/BackButton/BackButton.jsx'

class Ondernemend extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title ondernemend category>
          <BackButton icon="<" path="/"/>
          Ondernemend
        </Title>
        <List>
          <Link to="/ondernemende-houding">
            <ListItem>
              Ondernemende houding
            </ListItem>
          </Link>
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
