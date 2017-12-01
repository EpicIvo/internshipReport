import React from 'react';
import {Title, List, ListItem} from '../../shared/categoryStyles';
import {Link} from 'react-router';
// Components
import BackButton from '../common/BackButton/BackButton.jsx';

class Betrokken extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title betrokken category>
          <BackButton icon="<" path="/betrokken"/>
          Betrokken
        </Title>
        <List>
          <Link to="betrokken/lerend-vermogen">
          <ListItem>
            Lerend vermogen
          </ListItem>
          </Link>
        </List>
      </div>
    );
  }
}

export default Betrokken;
