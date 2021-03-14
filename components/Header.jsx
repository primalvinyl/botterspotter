import React from 'react';
import Link from './presentation/Link';
import { useBreakpoint } from './presentation/BreakpointProvider';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from '@material-ui/core/Drawer';
import styles from './Header.module.scss';

const useStyles = makeStyles({
    drawer: {
        backgroundColor: '#212529',
    },
});

const Header = () => {
    const materialStyles = useStyles();
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const breakpoint = useBreakpoint();
    const navList = [
        { path: '/', value: 'Search for a Bot'},
        { path: '/what-is-a-bot', value: 'What is a Bot?'},
        { path: '/how-to-spot-a-bot', value: 'How to Spot a Bot'},
        { path: '/twitter-rules', value: 'Twitter Rules'},
    ];

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    const NavList = navList.map(link => (
        <li key={link.path}>
            <Link
                href={link.path}
                activeClassName={styles.isActive}
                onClick={toggleDrawer}
            >
                {link.value}
            </Link>
        </li>
    ));

    return (
        <header role="banner" className={styles.root}>
            <nav role="navigation" className={styles.navigation}>
                {breakpoint.smUp &&
                    <ul className={styles.largeNav}>{NavList}</ul>
                }
                {breakpoint.xs &&
                    <div>
                        <IconButton
                            aria-label="menu"
                            onClick={toggleDrawer}
                        >
                            <MenuIcon htmlColor="#50febf" />
                        </IconButton>
                        <Drawer
                            variant="temporary"
                            anchor="top"
                            open={isDrawerOpen}
                            onClose={toggleDrawer}
                            classes={{ paper: materialStyles.drawer }}
                        >
                            <ul className={styles.smallNav}>{NavList}</ul>
                        </Drawer>
                    </div>
                }
            </nav>
            <div className={styles.logoHead}>
                <Link href="/">
                    <h1>Botter Spotter</h1>
                    <p>Find Twitter Bots and Trolls</p>
                </Link>
            </div>
        </header>
    )
};

export default Header;
