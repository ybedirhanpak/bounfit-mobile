import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, TopNavigation } from '@ui-kitten/components';
import Screen from '../Screen';

const renderNavigation = () => (
    <TopNavigation title='PROFILE' alignment='center' />
)

const ProfileScreen = ({ navigation }) => {
    const navigateTo = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <Screen
            renderNavigation={renderNavigation}
            style={styles.screen}
        >
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});

export default ProfileScreen;