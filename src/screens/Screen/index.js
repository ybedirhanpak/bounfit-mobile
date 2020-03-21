import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Divider, Layout } from '@ui-kitten/components';
import FloatingButton from '../../components/floatingButton';

const Screen = (props) => {
    const { 
        renderNavigation,
        style,
        refreshControl,
        children,
        fabIcon 
    } = props;

    return (
        <Layout style={styles.container}>
            {/* Header */}
            {renderNavigation && renderNavigation()}
            <Divider />
            {/* Body */}
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={refreshControl}
            >
                <Layout style={style}>
                    {children}
                </Layout>
            </ScrollView>
            {fabIcon && 
                <FloatingButton 
                    icon={fabIcon} 
                />
            }
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    scrollView: {
        paddingHorizontal: 10,
        paddingVertical: 5
    }
});

export default Screen;