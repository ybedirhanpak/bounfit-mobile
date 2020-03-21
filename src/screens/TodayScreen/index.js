import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Icon } from '@ui-kitten/components';
import Screen from '../Screen';
import MealCardSmall from '../../components/mealCardSmall';
import MealTotalInfo from '../../components/mealTotalInfo';

const FABIcon = (style) => (
    <Icon {...style} name={'plus-outline'} />
);

const renderTopNavigation = () => (
    <MealTotalInfo />
)

const TodayScreen = ({ navigation }) => {
    const navigateTo = (screen) => {
        navigation.navigate(screen);
    };

    const fabOnPress = () => {
        console.log("IM FABulous");
    }

    return (
        <Screen
            renderNavigation={renderTopNavigation}
            style={styles.screen}
            fabIcon={FABIcon}
        >
            <Layout style={styles.mealGroup}>
                <MealCardSmall containerStyle={styles.meal} />
                <MealCardSmall containerStyle={styles.meal} />
                <MealCardSmall containerStyle={styles.meal} />
                <MealCardSmall containerStyle={styles.meal} />
            </Layout>
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    mealGroup: {
        marginTop: 20
    },
    meal: {
        marginBottom: 15
    }
});

export default TodayScreen;