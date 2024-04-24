import React from 'react';
import PropTypes from 'prop-types';

const ExternalLink = ({ href, children, style }) => (
    <a href={href}
       target="_blank"
       rel="noopener noreferrer"
       style={style}>
        {children}
    </a>
);

ExternalLink.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    style: PropTypes.object,
};

export default function FooterLink({ href, text }) {
    return (
        <ExternalLink
            href={href}
            style={{
                color: 'black',
                textDecoration: 'none',
                fontSize: '1rem',
                marginBottom: '5px',
                display: 'block',
            }}>
            {text}
        </ExternalLink>
    );
}

FooterLink.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};
