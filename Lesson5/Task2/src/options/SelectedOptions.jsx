import { selectedOptionsSelector } from './options.selectors.js';
import Options from './Options';
import { connect } from 'react-redux';
import { toggleOption } from './options.actions.js';
const mapState = state => {
  return {
    options: selectedOptionsSelector(state),
  };
};
const mapDispatch = {
  moveOption: toggleOption,
};
export default connect(mapState, mapDispatch)(Options);
