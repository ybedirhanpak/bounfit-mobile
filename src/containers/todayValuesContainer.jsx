import { connect } from 'react-redux';

import ValuesInfo from '../components/valuesInfo';

const mapStateToProps = (state) => ({
  values: state.user.today.totalValues,
});

export default connect(mapStateToProps, null)(ValuesInfo);
