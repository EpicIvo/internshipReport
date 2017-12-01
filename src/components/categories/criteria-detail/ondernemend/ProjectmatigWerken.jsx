import React from 'react'
import CriteriaList from "../../../common/CriteriaList/CriteriaList.jsx";
import BackButton from '../../../common/BackButton/BackButton.jsx';
import {Title} from '../../../../shared/categoryStyles';
import {SubText} from '../../../../shared/criteriaStyles';

const List = [{
  path: '/ninlaro',
  title: 'Ninlaro'
}]

class ProjectmatigWerken extends React.Component {
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
          De CMGT'er is in staat om zowel individueel als in teamverband iteratief te werken aan de ontwikkeling van producten.
          De CMGT'er kan hierin diverse rollen aannemen, en communiceert tijdig en duidelijk met belanghebbenden.
        </SubText>
        <CriteriaList history={this.props.history} postList={List}/>
      </div>
    )
  }
}

export default ProjectmatigWerken;
