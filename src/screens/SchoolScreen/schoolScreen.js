import React, { useState, useCallback } from 'react';
import { StyleSheet, RefreshControl } from 'react-native';
import { Text, TopNavigation } from '@ui-kitten/components';
import Screen from '../Screen';
import SchoolCardContainer from '../../containers/School/schoolCard';

const SchoolScreen = ({ navigation }) => {

    const [refreshing, setRefreshing] = useState(false);

    const navigateTo = (screen) => {
        navigation.navigate(screen);
    };

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 500);
    }

    return (
        <Screen
            renderNavigation={
                () => <TopNavigation title='SCHOOL' alignment='center' />
            }
            style={styles.screen}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <SchoolCardContainer refreshing={refreshing} />
        </Screen>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});

export default SchoolScreen;