import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {
  Layout,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

const Card = (props) => {
  const { children, topLine, active, onPress } = props;
  const styles = useStyleSheet(themedStyles);

  const cardStyle = topLine
    ? { ...styles.card, ...styles.cardWithLine }
    : styles.card;

  if (!active) {
    return (
      <Layout style={cardStyle}>
        {children}
      </Layout>
    );
  }
  return (
    <TouchableOpacity
      style={cardStyle}
      activeOpacity={0.5}
      onPress={onPress}
    >
      {children}
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
  topLine: PropTypes.bool,
  active: PropTypes.bool,
  onPress: PropTypes.func,
};

Card.defaultProps = {
  topLine: false,
  active: false,
  onPress: undefined,
};

export default Card;
