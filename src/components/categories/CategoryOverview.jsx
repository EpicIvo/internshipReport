import React from 'react';
import {Title, List, ListItem} from '../../shared/categoryStyles';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
// Components
import BackButton from '../common/BackButton/BackButton.jsx'
// Data
import dataObject from '../../data/data.js';

class CategoryOverview extends React.Component {
  constructor(props) {
    super(props);
    const pathWithoutSlash = this.props.location.pathname.substring(1);
    const category = dataObject.categories[pathWithoutSlash];
    this.state = {
      title: category.title,
      criteria: category.criteria,
    };
    this.categoryProps = {};
    this.categoryProps[this.props.route.category] = true;
  }

  renderCriteriaList() {
    return this.state.criteria.map((criteria) => {
      return <Link key={criteria.title} to={criteria.path}>
        <ListItem>
          {criteria.title}
        </ListItem>
      </Link>
    })
  }

  render() {
    return (
      <div>
        <Title category {...this.categoryProps}>
          <BackButton icon="<" path="/"/>
          {this.state.title}
        </Title>
        <List>
          {this.renderCriteriaList()}
        </List>
      </div>
    );
  }
}

CategoryOverview.PropTypes = {
  route: PropTypes.shape({
    category: PropTypes.string.isRequired,
  })
};

export default CategoryOverview;
