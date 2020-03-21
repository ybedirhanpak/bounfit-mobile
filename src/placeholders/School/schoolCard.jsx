import React from 'react';
import PropTypes from 'prop-types';
import LoadingSpinner from '../../components/loadingSpinner';
import SchoolCard from '../../components/schoolCard';
import { mockMeal } from '../../mock/meal';

const SchoolCardPlaceholder = ({ type }) => {
  const renderTitle = () => {
    if (type === 'Loading') {
      return <LoadingSpinner />;
    }
  };

  return <SchoolCard meal={mockMeal} renderTitle={renderTitle} />;
};

SchoolCardPlaceholder.propTypes = {
  type: PropTypes.string.isRequired,
};

export default SchoolCardPlaceholder;
