import React from 'react';
import PropTypes from 'prop-types';
import { compose, lifecycle } from 'recompose';
import { withRouter } from 'react-router-dom';
import { ui } from 'components';

import './style.scss';

const HomeScreen = ({ history }) => (
  <div>
    <ui.Text />
    <ui.Buttons.BaseButton
      onClick={() => { history.push('/nextroute'); }}
      title="Push me"
    />
  </div>
);

HomeScreen.propTypes = {
  history: PropTypes.any,
};

export default compose(
  withRouter,
  lifecycle({
    componentDidMount() {
      console.log('Hello!');
    },
  }),
)(HomeScreen);
