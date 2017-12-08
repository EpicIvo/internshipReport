import React from 'react'
import CriteriaList from "../../../common/CriteriaList/CriteriaList.jsx";
import BackButton from '../../../common/BackButton/BackButton.jsx';
import {Title} from '../../../../shared/categoryStyles';
import {SubText} from '../../../../shared/criteriaStyles';

const List = [{
  path: '/ninlaro',
  title: 'Ninlaro'
}]

class Conceptualiseren extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title ontwerpend criteria>
          <BackButton icon="<" path="/ontwerpend"/>
          Conceptualiseren
        </Title>
        <SubText>
          De CMGT'er is in staat een concept te ontwerpen dat relevant is voor een vooraf gespecificeerde
          doelgroep. Vanuit een probleemstelling past de mediatechnoloog creatieve technieken toe om tot
          een ontwerpkader te komen dat als een startpunt gebruikt kan worden voor een ontwikkeltraject.
        </SubText>
        <CriteriaList history={this.props.history} postList={List}/>
      </div>
    )
  }
}

export default Conceptualiseren;
