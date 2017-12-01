import React from 'react'
import CriteriaList from "../../../common/CriteriaList/CriteriaList.jsx";
import BackButton from '../../../common/BackButton/BackButton.jsx';
import {Title} from '../../../../shared/categoryStyles';
import {SubText} from '../../../../shared/criteriaStyles';

const List = [{
  path: '/ninlaro',
  title: 'Ninlaro'
}]

class OndernemendeVaardigheden extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title ondernemend criteria>
          <BackButton icon="<" path="/ondernemend"/>
          Ondernemende Vaardigheden
        </Title>
        <SubText>
          De CMGT'er houdt zijn kennis over actuele ontwikkelingen bij en weet zijn bronnen daarvoor op waarde te schatten.
          Hierdoor is de CMGT'er in staat kansen te zien waar de klant of het stagebedrijf met behulp van technologie waarde kan creëren.
          Onder begeleiding kan hij hier een analyse met een trendrapportage en verdienmodellen van maken.
        </SubText>
        <CriteriaList history={this.props.history} postList={List}/>
      </div>
    )
  }
}

export default OndernemendeVaardigheden;
