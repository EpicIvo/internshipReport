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
// Data
import dataObject from '../../data/data.js';

class BasicPage extends React.Component {
  constructor(props) {
    super(props);
    const pageFromPath = this.props.location.pathname.split('/')[2];
    const page = dataObject.basicPages[pageFromPath];
    this.state = {
      href: page.href,
      title: page.title,
      content: page.content,
      subTitles: page.subTitles,
      attachments: page.attachments
    };
    this.pageProps = {};
    this.pageProps[pageFromPath] = true;
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
        <Title {...this.pageProps}>
          <BackButton icon="‹" path="/"/>
          {this.state.title}
        </Title>
        <DetailPageTopBar>
          <br />
          <br />
          <br />
          <br />
        </DetailPageTopBar>
        <Attachments>
          {this.state.attachments[0] !== undefined ? 'Bijlagen' : null}
          {this.renderAttachments()}
        </Attachments>
        {this.renderContent()}
      </div>
    )
  }
}

BasicPage.PropTypes = {
  route: PropTypes.shape({
    project: PropTypes.string.isRequired,
  })
};

export default BasicPage;
