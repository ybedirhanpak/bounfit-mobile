import React from 'react';
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native';
import { Text, TopNavigation, Button } from '@ui-kitten/components';
import Screen from '../Screen';
import { denemeAction } from '../../state/actions/meal';

const renderNavigation = () => (
    <TopNavigation title='EXPLORE' alignment='center' />
)

const ExploreScreen = (props) => {
    const { navigation, meal, denemeFunc} = props;
    const navigateTo = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <Screen
            renderNavigation={renderNavigation}
            style={styles.screen}
        >
            <Text>{meal.deneme}</Text>
            <Button
                onPress={() => denemeFunc("YAHYAA")}
            >
                Hello
            </Button>
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});

const mapStateToProps = state => ({
    meal: state.meal
  })
  
const mapDispatchToProps = dispatch => ({
denemeFunc: (text) => dispatch(denemeAction(text))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(ExploreScreen);
