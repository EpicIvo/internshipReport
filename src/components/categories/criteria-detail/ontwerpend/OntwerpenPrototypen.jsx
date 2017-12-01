import React from 'react'
import CriteriaList from "../../../common/CriteriaList/CriteriaList.jsx";
import BackButton from '../../../common/BackButton/BackButton.jsx';
import {Title} from '../../../../shared/categoryStyles';
import {SubText} from '../../../../shared/criteriaStyles';

const List = [{
  path: '/ninlaro',
  title: 'Ninlaro'
}]

class OntwerpenPrototypen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title ondernemend criteria>
          <BackButton icon="<" path="/ondernemend"/>
          Ondernemende houding
        </Title>
        <SubText>
          De CMGT'er kan een gestructureerd doelgroeponderzoek opzetten en uitvoeren
          in opdracht van het stagebedrijf. Door middel van prototyping en gebruikerstesten
          kan hij/zij tot een interface komen die aansluit bij deze doelgroep.
        </SubText>
        <CriteriaList history={this.props.history} postList={List}/>
      </div>
    )
  }
}

export default OntwerpenPrototypen;
