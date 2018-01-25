import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {Link} from 'react-router';
// Globalstyles
import {colors} from '../../../shared/globalStyles.js';

const CheckItOutLink = glamorous.div({
  fontFamily: 'Avenir next',
  fontSize: '2.2em',
  padding: '0 20% 2% 20%',
  textAlign: 'center',
  lineHeight: '1.1',
});

const LinkText = glamorous.div({
  color: colors.general.gray,
  textDecoration: 'underline'
});

const CheckItOut = (props) => (
  <CheckItOutLink>
    <Link to={props.path} target='_blank'>
      <LinkText>
        Check it out!
      </LinkText>
    </Link>
  </CheckItOutLink>
)

CheckItOut.PropTypes = {
  path: PropTypes.string.isRequired,
};

export default CheckItOut;
