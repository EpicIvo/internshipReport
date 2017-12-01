import React from 'react'
import CriteriaList from "../../../common/CriteriaList/CriteriaList.jsx";
import BackButton from '../../../common/BackButton/BackButton.jsx';
import {Title} from '../../../../shared/categoryStyles';
import {SubText} from '../../../../shared/criteriaStyles';

const List = [{
  path: '/ninlaro',
  title: 'Ninlaro'
}]

class TechnischeKennisAnalyse extends React.Component {
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
           De CMGT'er beschikt over kennis van ontwikkeltalen, - frameworks, -omgevingen, en kan deze met weinig
           begeleiding toepassen bij het analyseren van een probleem in een praktijksituatie. Hij houdt daarbij
           rekening met de bestaande situatie en de wensen van de betrokken stakeholders.
        </SubText>
        <CriteriaList history={this.props.history} postList={List}/>
      </div>
    )
  }
}

export default TechnischeKennisAnalyse;
