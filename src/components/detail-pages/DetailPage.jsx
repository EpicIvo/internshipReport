import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
// styles
import {
  Title,
  DetailPageTopBar,
  Attachments,
  AttachmentList,
  AttachmentListItem,
  AttachmentListItemText,
  Content,
  SubTitle,
  CirteriaTitle,
  Quote,
  List,
  Name,
  Role
} from './../../shared/detailStyles.js';
import {CategoryItem} from './../App/styles/styles.js';
// Components
import BackButton from '../common/BackButton/BackButton.jsx';
import CheckItOut from "../common/CheckItOut/CheckItOut.jsx";
// Data
import dataObject from '../../data/data.js';

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    const projectFromPath = this.props.location.pathname.split('/')[2];
    const project = dataObject.projects[projectFromPath];
    this.state = {
      href: project.href,
      title: project.title,
      content: project.content,
      subTitles: project.subTitles,
      categories: project.categories,
      attachments: project.attachments
    };
    this.projectProps = {};
    this.projectProps[projectFromPath] = true;
  }

  renderCategory() {
    return this.state.categories.map(category => {
      return <Link key={category.title} to={category.path}>
        <CategoryItem detailPage>
          {category.title}
        </CategoryItem>
      </Link>
    });
  }

  renderAttachments() {
    return <AttachmentList>
      {this.state.attachments.map(item => {
        return <AttachmentListItem key={item.title}>
          <AttachmentListItemText href={item.href} target="_blank">
            {item.title}
          </AttachmentListItemText>
        </AttachmentListItem>
      })}
    </AttachmentList>
  }

  renderContent() {
    return this.state.content.map(item => {
      switch (item.type) {
        case 'paragraph':
          return <Content key={item.content}>
            {item.content}
            <br/><br/>
          </Content>;
        case 'subTitle':
          return <SubTitle key={item.content} {...this.projectProps}>
            {item.content}
          </SubTitle>;
        case 'criteriaTitle':
          return <CirteriaTitle key={item.content} {...this.projectProps}>
            {item.content}
          </CirteriaTitle>;
        case 'quote':
          return <Quote key={item.content} {...this.projectProps}>
            "{item.content}"
          </Quote>;
        case 'list':
          return <List key={item.items[0] + item.items[1]}>
            {item.items.map(listItem => {
              return <li key={listItem.name}>
                <Name>
                  {listItem.name}
                </Name>
                <Role>
                  {listItem.role}
                </Role>
              </li>
            })}
          </List>
        default:
          return null;
      }
    });
  }

  render() {
    return (
      <div>
        <Title {...this.projectProps}>
          <BackButton icon="‹" path="/"/>
          {this.state.title}
        </Title>
        <DetailPageTopBar>
          {this.renderCategory()}
        </DetailPageTopBar>
        <Attachments>
          {this.state.attachments[0] !== undefined ? 'Bijlagen' : null}
          {this.renderAttachments()}
        </Attachments>
        {this.renderContent()}
        <CheckItOut path={this.state.href}/>
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
