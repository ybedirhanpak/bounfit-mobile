import React from 'react'
import { Spinner, Layout } from '@ui-kitten/components';

export default LoadingSpinner = () => {
    return (
        <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Spinner />
        </Layout>
    )
};
