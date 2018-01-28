import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {Link} from 'react-router';
// Globalstyles
import {colors} from '../../../shared/globalStyles.js';

const CheckItOutLink = glamorous.div({
  fontFamily: 'medium-content-sans-serif-font,"Lucida Grande","Lucida Sans Unicode","Lucida Sans",Geneva,Arial,sans-serif',
  fontSmoothing: 'antialiased',
  fontSize: '2.2em',
  padding: '0 20% 2% 20%',
  textAlign: 'center',
  lineHeight: '1.1',
});

const LinkText = glamorous.div({
  padding: '2% 0 2% 0',
  color: colors.general.white,
  backgroundColor: colors.general.gray,
  transitionDuration: '0.4s',
  ':hover': {
    color: colors.general.red,
  }
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
