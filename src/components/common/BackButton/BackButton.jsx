import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {Link} from 'react-router';
// Global Styles
import {colors} from '../../../shared/globalStyles.js';

const Button = glamorous.div({
  position: 'absolute',
  marginLeft: '3%'
});

const ButtonText = glamorous.div({
  fontFamily: 'Avenir',
  fontSize: '2em',
  fontWeight: '100',
  color: colors.general.white,
  transitionDuration: '0.4s',
  ':hover': {
    color: colors.general.red,
    cursor: 'pointer'
  }
});

const BackButton = (props) => (
  <Button>
    <Link to={props.path}>
      <ButtonText>
        {props.icon}
      </ButtonText>
    </Link>
  </Button>
)

BackButton.PropTypes = {
  icon: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default BackButton;
