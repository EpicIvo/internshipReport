import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
// styles
import {Title, DetailPageTopBar, Content, SubTitle} from './../../shared/detailStyles.js';
import {CategoryItem} from './../App/styles/styles.js';
// Components
import BackButton from '../common/BackButton/BackButton.jsx';
// Data
import dataObject from '../../data/data.js';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    const project = dataObject.projects[this.props.route.project];
    this.state = {
      title: project.title,
      content: project.content,
      subTitles: project.subTitles,
      categories: project.categories,
    };
    this.projectProps = {};
    this.projectProps[this.props.route.project] = true;
  }

  renderCategory() {
    return this.state.categories.map(category => {
      return <Link key={category.title} to={category.path}>
        <CategoryItem>
          {category.title}
        </CategoryItem>
      </Link>
    });
  }

  renderContent() {
    return this.state.content.map(item => {
      if (item.type === 'paragraph') {
        return <Content key={item.content}>
          {item.content}
          <br/><br/>
        </Content>;
      } else if (item.type === 'subTitle') {
        return <SubTitle key={item.content} {...this.projectProps}>
          >_ {item.content}
        </SubTitle>
      } else {
        return null
      }
    });
  }

  render() {
    return (
      <div>
        <Title {...this.projectProps}>
          <BackButton icon="<" path="/"/>
          {this.state.title}
        </Title>
        <DetailPageTopBar>
          {this.renderCategory()}
        </DetailPageTopBar>
        {this.renderContent()}
      </div>
    )
  }
}

DetailPage.PropTypes = {
  route: PropTypes.shape({
    project: PropTypes.string.isRequired,
  })
};

export default DetailPage;
