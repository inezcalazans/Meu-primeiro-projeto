import styles from './Header.module.css';

import ignitesimbol from '../ignitesimbol.svg';

export function Header() {
    return (
        <header className={styles.header}>
            <img src= {ignitesimbol} alt= "logotipo Ignite" />
        </header>
    );
}


