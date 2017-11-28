import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {Link} from 'react-router';
// Global Styles
import {colors} from '../../../shared/globalStyles.js';

const Button = glamorous.div({
  position: 'absolute',
});

const ButtonText = glamorous.div({
  fontFamily: 'Avenir',
  fontSize: '2em',
  fontWeight: '100',
  color: colors.general.white,
  transitionDuration: '0.4s',
  ':hover': {
    color: colors.general.lime,
    cursor: 'pointer'
  }
});

const BackButton = (props) => (
  <Button>
    <Link to="/">
      <ButtonText>
        {props.value}
      </ButtonText>
    </Link>
  </Button>
)

BackButton.PropTypes = {
  value: PropTypes.string.isRequired,
};

export default BackButton;
