import React from 'react'
import CriteriaList from "../../../common/CriteriaList/CriteriaList.jsx";
import BackButton from '../../../common/BackButton/BackButton.jsx';
import {Title} from '../../../../shared/categoryStyles';
import {SubText} from '../../../../shared/criteriaStyles';

const List = [{
  path: '/ninlaro',
  title: 'Ninlaro'
}]

class TestenImplementeren extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title ontwikkelend criteria>
          <BackButton icon="<" path="/ontwikkelend"/>
          Testen en implementeren
        </Title>
        <SubText>
          De CMGT'er is in staat de correcte werking van producten te testen, waarbij analyse van een
          iteratie tot verbeteringen in de volgende iteratie leidt. Zowel op functioneel- als technisch
          vlak worden vooraf door de klant of stagebedrijf goedgekeurde testopzet en testdoelen bepaald.
        </SubText>
        <CriteriaList history={this.props.history} postList={List}/>
      </div>
    )
  }
}

export default TestenImplementeren;
