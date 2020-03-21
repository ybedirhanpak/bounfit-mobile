import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleService, useStyleSheet } from '@ui-kitten/components';

const FloatingButton = (props) => {
  const style = useStyleSheet(themedStyle);
  const { iconRenderer, onPress } = props;

  return (
    <Button
      style={style.fab}
      icon={iconRenderer}
      onPress={onPress}
    />
  );
};

const themedStyle = StyleService.create({
  fab: {
    width: 55,
    height: 55,
    borderRadius: 30,
    position: 'absolute',
    bottom: 10,
    right: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
});

FloatingButton.propTypes = {
  iconRenderer: PropTypes.func,
  onPress: PropTypes.func,
};

FloatingButton.defaultProps = {
  iconRenderer: undefined,
  onPress: undefined,
};

export default FloatingButton;
