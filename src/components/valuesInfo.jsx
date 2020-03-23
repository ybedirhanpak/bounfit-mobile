import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Layout,
  Text,
  Icon,
  Button,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

import VALUES from '../defaults/values';

const BackIcon = (styles) => <Icon {...styles} name="arrow-back-outline" />;
const AddIcon = (styles) => <Icon {...styles} name="plus-outline" />;

const ValuesInfo = (props) => {
  const { values, hasBack, onBackPress, hasAdd, onAddPress } = props;
  const { protein, carb, fat, calories } = values;

  const styles = useStyleSheet(themedStyles);
  const cardStyle = styles.card;
  if (hasBack) {
    cardStyle.paddingLeft = 0;
  }

  if (hasAdd) {
    cardStyle.paddingRight = 0;
  }

  return (
    <Layout style={styles.container}>
      <Layout style={styles.wrapper}>
        {hasBack && (
          <Button
            onPress={onBackPress}
            icon={BackIcon}
            style={styles.button}
            appearance="ghost"
          />
        )}
        <Layout style={cardStyle}>
          <Layout style={styles.infoGroup}>
            <Layout style={styles.info}>
              <Text style={styles.title}>Protein</Text>
              <Text style={styles.amount}>{`${protein} gr`}</Text>
            </Layout>
            <Layout style={styles.info}>
              <Text style={styles.title}>Carb</Text>
              <Text style={styles.amount}>{`${carb} gr`}</Text>
            </Layout>
            <Layout style={styles.info}>
              <Text style={styles.title}>Fat</Text>
              <Text style={styles.amount}>{`${fat} gr`}</Text>
            </Layout>
            <Layout style={styles.info}>
              <Text style={styles.title}>Calories</Text>
              <Text style={styles.amount}>{`${calories} kcal`}</Text>
            </Layout>
          </Layout>
        </Layout>
        {hasAdd && (
          <Button
            onPress={onAddPress}
            icon={AddIcon}
            style={styles.button}
            appearance="ghost"
          />
        )}
      </Layout>
    </Layout>
  );
};

const themedStyles = StyleService.create({
  container: {
    height: 70,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    width: 40,
  },
  card: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 40,
    paddingRight: 40,
  },
  infoGroup: {
    flex: 1,
    flexDirection: 'row',
  },
  info: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 13,
  },
});

ValuesInfo.propTypes = {
  values: VALUES.propType.isRequired,
  hasBack: PropTypes.bool,
  onBackPress: PropTypes.func,
  hasAdd: PropTypes.bool,
  onAddPress: PropTypes.func,
};

ValuesInfo.defaultProps = {
  hasBack: false,
  onBackPress: undefined,
  hasAdd: false,
  onAddPress: undefined,
};

const mapStateToProps = (state) => ({
  values: state.user.today.totalValues,
});

export default connect(mapStateToProps, null)(ValuesInfo);
