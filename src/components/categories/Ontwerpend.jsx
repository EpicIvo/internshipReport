import React from 'react';
import {Title, List, ListItem} from '../../shared/categoryStyles';
import {Link} from 'react-router';
// Components
import BackButton from '../common/BackButton/BackButton.jsx'

class Ontwerpend extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title ontwerpend category>
          <BackButton icon="<" path="/"/>
          Ontwerpend
        </Title>
        <List>
          <Link to="/ontwerpend/conceptualiseren">
            <ListItem>
              Conceptualiseren
            </ListItem>
          </Link>
          <Link to="/ontwerpend/ontwerpen-en-prototypen">
            <ListItem>
              Ontwerpen en prototypen
            </ListItem>
          </Link>
        </List>
      </div>
    );
  }
}

export default Ontwerpend;
