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
          <Link to="/ondernemend/ondernemende-houding">
            <ListItem>
              Ondernemende houding
            </ListItem>
          </Link>
          <Link to="/ondernemend/ondernemende-vaardigheden">
            <ListItem>
              Ondernemende vaardigheden
            </ListItem>
          </Link>
          <Link to="/ondernemend/projectmatig-werken">
            <ListItem>
              Projectmatig werken
            </ListItem>
          </Link>
        </List>
      </div>
    );
  }
}

export default Ondernemend;
