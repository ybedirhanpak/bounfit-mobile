import React from 'react'
import { StyleSheet } from 'react-native';
import SchoolFood from './schoolFood';
import { Divider, Layout, Text } from '@ui-kitten/components';

const renderFoodList = (foodList) => {
    const renderedList = foodList.map((food, index) => (
        <SchoolFood key={`${food.name}-${index}`} food={food} />
    ));
    return renderedList;
}

export default SchoolMeal = ({ meal }) => {
    const { soup, maincourse, vegetarien, complementary, selective } = meal;
    return (
        <Layout style={styles.container}>
            <Layout style={styles.foodGroup}>
                <SchoolFood food={soup} />
                <Divider style={styles.divider} />
            </Layout>
            <Layout style={styles.foodGroup}>
                <SchoolFood food={maincourse} />
                <SchoolFood food={vegetarien} />
                <Divider style={styles.divider} />
            </Layout>
            {complementary &&
                <Layout style={styles.foodGroup}>
                    {renderFoodList(complementary)}
                    <Divider style={styles.divider} />
                </Layout>
            }
            {selective &&
                <Layout style={styles.foodGroup}>
                    {renderFoodList(selective)}
                </Layout>
            }
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    foodGroup: {
        flex: 1,
        backgroundColor: 'transparent',
        marginBottom: 5
    },
    divider: {
        marginTop: 5
    }
});
