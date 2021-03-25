import React from 'react';
import PropTypes from 'prop-types';

const Layout: React.FunctionComponent = ({ children }) => <>{children}</>;

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
