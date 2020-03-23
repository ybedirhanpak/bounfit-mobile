import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Divider, Layout } from '@ui-kitten/components';
import FloatingButton from '../../components/floatingButton';

const Screen = (props) => {
  const {
    noScroll,
    style,
    children,
    renderNavigation,
    refreshControl,
    fab,
  } = props;

  return (
    <Layout style={styles.container}>
      {/* Header */}
      {renderNavigation && renderNavigation()}
      <Divider />
      {/* Body */}
      {noScroll && <Layout style={style}>{children}</Layout>}
      {!noScroll && (
        <ScrollView
          contentContainerStyle={styles.scrollView}
          refreshControl={refreshControl}
        >
          <Layout style={style}>{children}</Layout>
        </ScrollView>
      )}

      {fab && (
        <FloatingButton iconRenderer={fab.iconRenderer} onPress={fab.onPress} />
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

Screen.propTypes = {
  renderNavigation: PropTypes.func,
  style: PropTypes.object,
  refreshControl: PropTypes.object,
  children: PropTypes.any,
  fab: PropTypes.shape({
    iconRenderer: PropTypes.func,
    onPress: PropTypes.func,
  }),
  noScroll: PropTypes.bool,
};

Screen.defaultProps = {
  renderNavigation: undefined,
  style: {
    flex: 1,
  },
  refreshControl: undefined,
  children: undefined,
  fab: undefined,
  noScroll: false,
};

export default Screen;
