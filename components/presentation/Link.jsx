import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

const Link = ({
        activeClassName,
        className,
        href,
        onClick,
        children,
        ...other
    }) => {
    const router = useRouter();
    const transformedClass = (router && router.pathname) === href && activeClassName || className;

    return (
        <NextLink href={href} {...other}>
            <a className={transformedClass}>{children}</a>
        </NextLink>
    );
}

Link.propTypes = {
    activeClassName: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func
};

Link.defaultProps = {
    activeClassName: 'isActive',
    className: 'link',
    href: '',
    onClick: () => {}
};

export default Link;
