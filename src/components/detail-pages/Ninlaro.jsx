import React from 'react';
import {Link} from 'react-router';
// styles
import {Title, DetailPageTopBar, Content, SubTitle} from './../../shared/detailStyles.js';
import {CategoryItem} from './../App/styles/styles.js';
// Components
import BackButton from '../common/BackButton/BackButton.jsx';
//data
import dataObject from '../../data/data.js';

class Ninlaro extends React.Component {
  constructor() {
    super();
    this.state = {
      title: dataObject.projects.ninlaro.title,
      content: dataObject.projects.ninlaro.content,
      subTitles: dataObject.projects.ninlaro.subTitles,
      categories: dataObject.projects.ninlaro.categories,
    };
    this.renderCategory = this.renderCategory.bind(this);
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
        return <SubTitle key={item.content} ninlaro>
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
        <Title ninlaro>
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

export default Ninlaro;
