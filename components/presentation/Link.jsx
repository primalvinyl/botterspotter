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
        ...restProps
    }) => {
    const router = useRouter();
    const transformedClass = (router && router.pathname) === href && activeClassName || className;

    return (
        <NextLink href={href} {...restProps}>
            <a className={transformedClass} onClick={onClick}>{children}</a>
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
