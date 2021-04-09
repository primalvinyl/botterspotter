import React from 'react';
import Link from './presentation/Link';
import { CSSTransition } from 'react-transition-group';
import { useBreakpoint } from './presentation/BreakpointProvider';
import styles from './Header.module.scss';

const Header = () => {
    const headerRef = React.useRef(null);
    const [toggleNav, setToggleNav] = React.useState(false);
    const breakpoint = useBreakpoint();
    const navList = [
        { path: '/', value: 'Search for a Bot'},
        { path: '/what-is-a-bot', value: 'What is a Bot?'},
        { path: '/how-to-spot-a-bot', value: 'How to Spot a Bot'},
        { path: '/twitter-rules', value: 'Twitter Rules'},
    ];
    const navLabel = breakpoint.mdDown ? 'Main Navigation' : 'Mobile Navigation Dropdown';

    React.useEffect(() => {
        // detects mouse click outside nav
        document.addEventListener('mousedown', clickHandler);
        return () => document.removeEventListener('mousedown', clickHandler);
    }, []);

    const clickHandler = event => {
        if (headerRef.current && headerRef.current.contains(event.target)) return;
        else setToggleNav(false);
    };

    const toggleNavHandler = event => {
        event.stopPropagation();
        setToggleNav(!toggleNav);
    };

    const NavList = navList.map(link => (
        <li key={link.path}>
            <Link 
                href={link.path}
                activeClassName={styles.isActive}
                onClick={toggleNavHandler}
            >
                {link.value}
            </Link>
        </li>
    ));

    return (
        <header ref={headerRef} className={styles.root}>
            {breakpoint.mdDown &&
                <section className={styles.navToggle}>
                    <button onClick={toggleNavHandler}
                        aria-label="Mobile Navigation Button"
                        aria-expanded={toggleNav}>
                        <svg viewBox="0 0 100 80" width="25" height="30">
                            <rect width="100" height="15" rx="8"></rect>
                            <rect y="30" width="100" height="15" rx="8"></rect>
                            <rect y="60" width="100" height="15" rx="8"></rect>
                        </svg>
                    </button>
                </section>
            }

            <CSSTransition
                in={toggleNav || breakpoint.mdUp}
                timeout={400}
                classNames={{
                    enter: styles.enter,
                    enterActive: styles.enterActive,
                    exit: styles.exit,
                    exitActive: styles.exitActive
                }}
                mountOnEnter
                unmountOnExit
            >
                <nav role="navigation" className={styles.navigation} aria-label={navLabel}>
                    <ul>{NavList}</ul>
                </nav>
            </CSSTransition>

            <div className={styles.logoHead}> 
                <h1><Link href="/">Botter Spotter</Link></h1>
                <p>Find Twitter Bots and Trolls</p>
            </div>
        </header>
    )
};

export default Header;
