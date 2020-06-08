import React from 'react';
import { Helmet } from 'react-helmet';

import favicon from '../../images/favicon.png'

const Head = ({ title }) => {

    return (
        // <Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
        <Helmet title={`${title} | Kate Sorotos`}>
            <link rel="icon" href={favicon} />
        </Helmet>
    )
}

export default Head;