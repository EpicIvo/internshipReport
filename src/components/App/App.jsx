import React, {PropTypes} from 'react';
import {Link} from 'react-router';
// Styled
import {AppContainer, TopBar, CategoryItem, Title, DoubleBlockContainer, BlockContainer, Block, BlockText} from './styles/styles.js';
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
      {this.state.categories.map((category) => {
        return <Link key={category.title} to={category.path}>
          <CategoryItem>
            {category.title}
          </CategoryItem>
        </Link>
      })}
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
            <Block {...this.projectMachineNameProp}>
              <BlockText>
                {project.title}
              </BlockText>
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

        <Title>
          Ivo
        </Title>

        {this.renderTopBar()}
        {this.renderProjectBlocks()}

      </AppContainer>
    );
  }
}

App.propTypes = {};

export default App;
