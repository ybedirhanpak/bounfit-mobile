import React from 'react';
import { StatusBar as Bar } from 'react-native';
import { useTheme } from '@ui-kitten/components';

const StatusBar = () => {
  const theme = useTheme();
  return (
    <Bar
      barStyle="dark-content"
      hidden={false}
      backgroundColor={theme['color-basic-200']}
    />
  );
};

export default StatusBar;
