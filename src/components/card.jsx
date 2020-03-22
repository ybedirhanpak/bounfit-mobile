import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Layout, StyleService, useStyleSheet } from '@ui-kitten/components';

const Card = (props) => {
  const {
    children,
    containerStyle,
    hasTopLine,
    topLineColor,
    active,
    onPress,
  } = props;

  if (hasTopLine) {
    if (topLineColor !== 'color-primary-default') {
      themedStyles.card = {
        ...themedStyles.card,
        ...themedStyles.cardWithLine,
        borderTopColor: topLineColor,
      };
    } else {
      themedStyles.card = {
        ...themedStyles.card,
        ...themedStyles.cardWithLine,
      };
    }
  }

  const styles = useStyleSheet(themedStyles);

  if (!active) {
    return (
      <Layout style={styles.card}>
        <Layout style={containerStyle}>{children}</Layout>
      </Layout>
    );
  }
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.5} onPress={onPress}>
      <Layout style={containerStyle}>{children}</Layout>
    </TouchableOpacity>
  );
};

const themedStyles = StyleService.create({
  card: {
    borderColor: 'color-basic-400',
    borderWidth: 1,
    borderRadius: 4,
  },
  cardWithLine: {
    borderTopWidth: 2,
    borderTopColor: 'color-primary-default',
  },
});

Card.propTypes = {
  children: PropTypes.any.isRequired,
  containerStyle: PropTypes.object,
  hasTopLine: PropTypes.bool,
  topLineColor: PropTypes.string,
  active: PropTypes.bool,
  onPress: PropTypes.func,
};

Card.defaultProps = {
  containerStyle: {
    flex: 1,
  },
  hasTopLine: false,
  topLineColor: 'color-primary-default',
  active: false,
  onPress: undefined,
};

export default Card;
