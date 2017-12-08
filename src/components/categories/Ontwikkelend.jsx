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
        <Title ontwikkelend category>
          <BackButton icon="<" path="/"/>
          Ontwikkelend
        </Title>
        <List>
          <Link to="/ontwikkelend/technische-kennis-en-analyse">
            <ListItem>
              Technische kennis en analyse
            </ListItem>
          </Link>
          <Link to="/ontwikkelend/ontwikkelen-en-prototypen">
            <ListItem>
              Ontwikkelen en prototypen
            </ListItem>
          </Link>
          <Link to="/ontwikkelend/testen-en-implementeren">
            <ListItem>
              Testen en implementeren
            </ListItem>
          </Link>
        </List>
      </div>
    );
  }
}

export default Ontwerpend;
