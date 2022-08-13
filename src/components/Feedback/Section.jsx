import React from 'react';
import propTypes from 'prop-types';

const Section = ({ title, children }) => (
  <>
    <h1>{title}</h1>
    {children}
  </>
);

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Section;
