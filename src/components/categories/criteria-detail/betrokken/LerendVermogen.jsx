import React from 'react'
import CriteriaList from "../../../common/CriteriaList/CriteriaList.jsx";
import BackButton from '../../../common/BackButton/BackButton.jsx';
import {Title} from '../../../../shared/categoryStyles';
import {SubText} from '../../../../shared/criteriaStyles';

const List = [{
  path: '/ninlaro',
  title: 'Ninlaro'
}]

class LerendVermogen extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Title ondernemend criteria>
          <BackButton icon="<" path="/ondernemend"/>
          Lerend vermogen
        </Title>
        <SubText>
          De CMGT'er streeft naar verbetering en is kritisch naar collega’s en zichzelf om het beste in zichzelf
          en anderen naar boven te halen. De CMGT'er reflecteert op eigen ervaringen en feedback vanuit het
          stagebedrijf en trekt daaruit lessen voor de toekomst.
        </SubText>
        <CriteriaList history={this.props.history} postList={List}/>
      </div>
    )
  }
}

export default LerendVermogen;
