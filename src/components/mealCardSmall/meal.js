import React from 'react'
import {
    Layout, Card, Text, Button, Icon, Divider,
    StyleService, useStyleSheet
} from '@ui-kitten/components';

export default Meal = ({ meal: { name, protein, carb, fat, calories }, total }) => {
    const styles = useStyleSheet(themedStyles);
    return (
        <Layout style={styles.meal}>
            {total && <Text style={styles.total}>Total</Text>}
            {!total && <Text style={styles.name}>{name}</Text>}
            <Layout style={styles.infoGroup}>
                <Text style={{ ...styles.info, backgroundColor: "#eceff1" }}>{protein}</Text>
                <Text style={{ ...styles.info, backgroundColor: "#cfd8dc" }}>{carb}</Text>
                <Text style={{ ...styles.info, backgroundColor: "#eceff1" }}>{fat}</Text>
                <Text style={{ ...styles.info, backgroundColor: "#cfd8dc" }}>{calories}</Text>
            </Layout>
        </Layout>
    )
}

const themedStyles = StyleService.create({
    meal: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 5
    },
    name: {
        flex: 1
    },
    total: {
        flex: 1,
        fontWeight: "bold"
    },
    infoGroup: {
        flex: 1,
        flexDirection: "row",
    },
    info: {
        flex: 1,
        textAlign: "center",
        fontSize: 12
    }
});

