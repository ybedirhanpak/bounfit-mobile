import React from 'react';
import LoadingSpinner from '../../components/loadingSpinner';
import SchoolCard from '../../components/schoolCard';
import { mockMeal } from '../../mock/meal';


export default SchoolCardPlaceholder = (props) => {

    const renderTitle = () => {
        if (props.type === "Loading") {
            return (<LoadingSpinner />);
        }
    }

    return (
        <SchoolCard {...props} meal={mockMeal} renderTitle={renderTitle} />
    )
}
