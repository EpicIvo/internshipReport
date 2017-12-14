import React from 'react'
import CriteriaList from "../../common/CriteriaList/CriteriaList.jsx";
import BackButton from '../../common/BackButton/BackButton.jsx';
import {Title} from '../../../shared/categoryStyles';
import {SubText} from '../../../shared/criteriaStyles';
// data
import dataObject from '../../../data/data.js';

class CriteriaDetail extends React.Component {
  constructor(props) {
    super(props);
    const routePath = this.props.location.pathname;
    const categoryFromPath = routePath.split('/')[1];
    const category = dataObject.categories[categoryFromPath];
    this.criteria = '';

    dataObject.categories[categoryFromPath].criteria.map((criteriaObj) => {
      if (criteriaObj.path === routePath) {
        this.criteria = criteriaObj;
      }
    });

    this.state = {
      criteriaList: category.criteria,
      category: category,
      criteria: this.criteria,
    };

    this.categoryProps = {};
    this.categoryProps[categoryFromPath] = true;
  }

  render() {
    return (
      <div>
        <Title criteria {...this.categoryProps}>
          <BackButton icon="<" path={this.state.category.path}/>
          {this.state.criteria.title}
        </Title>
        <SubText>
          {this.state.criteria.subText}
        </SubText>
        <CriteriaList history={this.props.history} postList={this.state.criteria.list}/>
      </div>
    )
  }
}

export default CriteriaDetail;
