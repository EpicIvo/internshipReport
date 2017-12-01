import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
// Styles
import {List, ListItem} from "../../../shared/categoryStyles";

function CriteriaList(props) {
  return (
    <List>
      {props.postList.map(post => {
        return <Link key={post.title} to={post.path}>
          <ListItem>
            {post.title}
          </ListItem>
        </Link>
      })}
    </List>
  );
}

CriteriaList.PropTypes = {
  postList: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  )
};

export default CriteriaList;
