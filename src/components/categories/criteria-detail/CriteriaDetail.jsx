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
    const category = dataObject.categories[this.props.route.category];
    this.criteria = '';

    dataObject.categories[this.props.route.category].criteria.map((criteriaObj) => {
      if (criteriaObj.path === this.props.route.routePath) {
        this.criteria = criteriaObj;
      }
    });

    this.state = {
      criteriaList: category.criteria,
      category: category,
      criteria: this.criteria,
    };

    this.categoryProps = {};
    this.categoryProps[this.props.route.category] = true;
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
