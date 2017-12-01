import React from 'react'
import CriteriaList from "../../../common/CriteriaList/CriteriaList.jsx";
import BackButton from '../../../common/BackButton/BackButton.jsx';
import {Title} from '../../../../shared/categoryStyles';
import {SubText} from '../../../../shared/criteriaStyles';

const List = [{
  path: '/ninlaro',
  title: 'Ninlaro'
}]

class OntwikkelenPrototypen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title ondernemend criteria>
          <BackButton icon="<" path="/ondernemend"/>
          Ontwikkelen en prototypen
        </Title>
        <SubText>
          De CMGT'er is in staat om iteratief te ontwikkelen, om zo deadlines en afspraken na te komen.
          Hij heeft een gedegen kennis op programmeergebied en is flexibel genoeg om zich snel in te
          werken in nieuwe talen, platformen, tools en de werkwijze binnen het stagebedrijf.
        </SubText>
        <CriteriaList history={this.props.history} postList={List}/>
      </div>
    )
  }
}

export default OntwikkelenPrototypen;
