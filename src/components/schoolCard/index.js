import React from 'react';
import {
    Card,
    Layout,
    Text,
    StyleService,
    useStyleSheet
} from '@ui-kitten/components';
import SchoolMeal from "./schoolMeal";

export default SchoolCard = ({ meal, renderTitle }) => {

    const styles = useStyleSheet(themedStyles);

    const renderHeader = (renderTitle) => {
        return (
            <Layout style={styles.header}>
                {renderTitle(styles)}
            </Layout>
        );
    };

    return (
        <Card
            style={styles.card}
            header={() => renderHeader(renderTitle)}
            status='primary'
            disabled={true}
        >
            <SchoolMeal meal={meal} />
        </Card>
    )
};

const themedStyles = StyleService.create({
    card: {
        borderTopWidth: 3,
        borderTopColor: 'color-primary-default'
    },
    header: {
        paddingVertical: 16,
    },
    title: {
        fontSize: 20,
        textAlign: "center"
    },
    mealWrapper: {
        flex: 1,
        backgroundColor: 'transparent'
    }
});

