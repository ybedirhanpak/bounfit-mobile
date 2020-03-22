import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {
  Layout,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';

const Card = (props) => {
  const { children, containerStyle, topLine, active, onPress } = props;
  const styles = useStyleSheet(themedStyles);

  const cardStyle = topLine
    ? { ...styles.card, ...styles.cardWithLine }
    : styles.card;

  if (!active) {
    return (
      <Layout style={cardStyle}>
        <Layout style={containerStyle}>
          {children}
        </Layout>
      </Layout>
    );
  }
  return (
    <TouchableOpacity
      style={cardStyle}
      activeOpacity={0.5}
      onPress={onPress}
    >
      <Layout style={containerStyle}>
        {children}
      </Layout>
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
  topLine: PropTypes.bool,
  active: PropTypes.bool,
  onPress: PropTypes.func,
};

Card.defaultProps = {
  containerStyle: {
    flex: 1,
  },
  topLine: false,
  active: false,
  onPress: undefined,
};

export default Card;
