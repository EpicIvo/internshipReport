import React from 'react'
import CriteriaList from "../../../common/CriteriaList/CriteriaList.jsx";
import BackButton from '../../../common/BackButton/BackButton.jsx';
import {Title} from '../../../../shared/categoryStyles';
import {SubText} from '../../../../shared/criteriaStyles';

const List = [{
  path: '/ninlaro',
  title: 'Ninlaro'
}]

class OndernemendeHouding extends React.Component {
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
          De CMGT'er heeft een actueel beeld van de stand van zaken in de maatschappij op het gebied van technologie.
          Dit beeld wordt gebruikt om oplossingen te ontwikkelen die er toe doen voor de klant of het stagebedrijf,
          en deze uit zichzelf aan te dragen.
        </SubText>
        <CriteriaList history={this.props.history} postList={List}/>
      </div>
    )
  }
}

export default OndernemendeHouding;
