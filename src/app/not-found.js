import styles from './error.module.scss'

export default function Notfound() {
    return (
        <div className={styles.notfound}>
            <h1>Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    )
}
