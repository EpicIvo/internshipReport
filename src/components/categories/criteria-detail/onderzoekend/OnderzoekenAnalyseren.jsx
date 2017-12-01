import React from 'react'
import CriteriaList from "../../../common/CriteriaList/CriteriaList.jsx";
import BackButton from '../../../common/BackButton/BackButton.jsx';
import {Title} from '../../../../shared/categoryStyles';
import {SubText} from '../../../../shared/criteriaStyles';

const List = [{
  path: '/ninlaro',
  title: 'Ninlaro'
}]

class OnderzoekenAnalyseren extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title ondernemend criteria>
          <BackButton icon="<" path="/ondernemend"/>
          Onderzoeken en analyseren
        </Title>
        <SubText>
          De CMGT'er is in staat op structurele wijze een bronnen- en veldonderzoek uit te voeren in opdracht
          van het stagebedrijf en op basis van de verzamelde data conclusies te trekken en aanbevelingen te doen.
          De CMGT'er reflecteert de resultaten van het onderzoek kritisch.
        </SubText>
        <CriteriaList history={this.props.history} postList={List}/>
      </div>
    )
  }
}

export default OnderzoekenAnalyseren;
