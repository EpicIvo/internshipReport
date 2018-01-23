import React, {PropTypes} from 'react';
import {Link} from 'react-router';
// Styled
import {
  AppContainer,
  TopBar,
  Title,
  BurstLogo,
  Menu,
  CategoryItem,
  DoubleBlockContainer,
  BlockContainer,
  BlockBackground,
  Block,
  BlockText
} from './styles/styles.js';
// Components
import Introduction from './Introduction.jsx';
// Images
import burstLogo from '../../images/burst-logo.png';
// data
import dataObject from '../../data/data.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: Object.values(dataObject.projects),
      categories: Object.values(dataObject.categories),
    };
  }

  renderTopBar() {
    return <TopBar>
      <Title>
        Ivo
      </Title>
      <BurstLogo src={burstLogo}/>
      <Menu>
        {this.state.categories.map((category) => {
          return <Link key={category.title} to={category.path}>
            <CategoryItem>
              {category.title}
            </CategoryItem>
          </Link>
        })}
      </Menu>
    </TopBar>
  }

  renderProjectBlocks() {
    let i = 0;
    let projectIndex = -1;
    return <DoubleBlockContainer>
      {this.state.projects.map((project) => {
        projectIndex++;
        this.projectMachineNameProp = {};
        this.projectMachineNameProp[Object.keys(dataObject.projects)[projectIndex]] = true;
        if (i > 3) {
          return '</DoubleBlockContainer><DoubleBlockContainer>'
          i = 0;
        }
        return <BlockContainer key={project.title}>
          <Link to={`/project${project.path}`}>
            <Block id="block" {...this.projectMachineNameProp}>
              <BlockBackground>
                <BlockText>
                  {project.title}
                </BlockText>
              </BlockBackground>
            </Block>
          </Link>
        </BlockContainer>
        i++;
      })}
    </DoubleBlockContainer>
  }

  render() {
    return (
      <AppContainer>
        {this.renderTopBar()}
        <Introduction/>
        {this.renderProjectBlocks()}
      </AppContainer>
    );
  }
}

App.propTypes = {};

export default App;
