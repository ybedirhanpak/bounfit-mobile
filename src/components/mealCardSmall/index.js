import React from 'react';
import {
    Layout, Card, Text, Button, Icon, Divider,
    StyleService, useStyleSheet
} from '@ui-kitten/components';
import Meal from './meal';

const mockFood = {
    name: "Meal Name",
    protein: 10,
    carb: 10,
    fat: 10,
    calories: 10
}

const mockTotal = {
    name: "Total",
    protein: 100,
    carb: 100,
    fat: 100,
    calories: 100
}

export default MealCardSmall = (props) => {
    const { containerStyle } = props;
    const styles = useStyleSheet(themedStyles);

    const EditIcon = (style) => (
        <Icon {...style} name='edit-outline' />
    );

    const DeleteIcon = (style) => (
        <Icon {...style} name='trash-2-outline' />
    );

    return (
        <Layout style={containerStyle}>
            <Layout
                style={styles.card}
            >
                <Layout style={styles.header}>
                    <Text style={styles.title}>Meal Name</Text>
                </Layout>
                <Divider />
                <Layout style={styles.body}>
                    <Meal meal={mockFood} />
                    <Meal meal={mockFood} />
                    <Meal total meal={mockTotal} />
                </Layout>
                <Layout style={styles.footer}>
                    <Button
                        appearance="ghost"
                        style={styles.button}
                        icon={EditIcon}
                    />
                    <Button
                        appearance="ghost"
                        style={styles.button}
                        icon={DeleteIcon}
                    />
                </Layout>
            </Layout>
        </Layout>
    )
}

const themedStyles = StyleService.create({
    card: {
        borderWidth: 1,
        borderColor: "color-basic-400",
        borderTopWidth: 2,
        borderTopColor: 'color-primary-default',
        paddingTop: 15,
        borderRadius: 4,
    },
    header: {
        flex: 3,
        paddingLeft: 20,
        marginBottom: 15
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    },
    body: {
        marginTop: 10,
        paddingHorizontal: 20
    },
    footer: {
        flex: 1,
        width: "100%",
        flexDirection: "row",
        alignSelf: "flex-end"
    },
    button: {
        flex: 1,
        borderRadius: 0
    },
    course: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 5
    },
    courseName: {
        flex: 2
    },
    infoGroup: {
        flex: 2,
        flexDirection: "row",
    },
    info: {
        flex: 1,
        textAlign: "center",
        fontSize: 12
    }
});

