import React from 'react';
import {Title, List, ListItem} from '../../shared/categoryStyles';
import {Link} from 'react-router';
// Components
import BackButton from '../common/BackButton/BackButton.jsx'

class Onderzoekend extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title onderzoekend category>
          <BackButton icon="<" path="/onderzoekend"/>
          Onderzoekend
        </Title>
        <List>
          <Link to="/onderzoekend/onderzoeken-en-analyseren">
            <ListItem>
              Onderzoeken en analyseren
            </ListItem>
          </Link>
        </List>
      </div>
    );
  }
}

export default Onderzoekend;
