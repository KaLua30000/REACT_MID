
import { Link } from "react-router-dom"
import { NavLink } from 'react-router-dom';
import styles from "./header.module.css";

export default function Header({ title }) {

    return (
        <div className={styles.header}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className={styles.headerTitle}>
                    HOME
                </div>
            </Link>
            <div className={styles.navmenu}>
                <NavLink to="/menu"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    物品清單
                </NavLink>
                <NavLink to="/products/cookware"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    Cookware
                </NavLink>
                <NavLink to="/products/home-accessories"
                    className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                    Homeware
                </NavLink>
            </div>
        </div>
    );
}

