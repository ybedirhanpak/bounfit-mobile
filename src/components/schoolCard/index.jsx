import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  Layout,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import SchoolMeal from './schoolMeal';

const SchoolCard = (props) => {
  const { meal, renderTitle } = props;
  const styles = useStyleSheet(themedStyles);

  const renderHeader = () => (
    <Layout style={styles.header}>{renderTitle(styles)}</Layout>
  );

  return (
    <Card
      style={styles.card}
      header={() => renderHeader()}
      status="primary"
      disabled
    >
      <SchoolMeal meal={meal} />
    </Card>
  );
};

const themedStyles = StyleService.create({
  card: {
    borderTopWidth: 3,
    borderTopColor: 'color-primary-default',
  },
  header: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
  mealWrapper: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

SchoolCard.propTypes = {
  meal: PropTypes.object.isRequired,
  renderTitle: PropTypes.func.isRequired,
};

export default SchoolCard;
