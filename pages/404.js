import Layout from "../components/Layout";
import Link from 'next/link'
import styles from '../styles/404.module.css'
import {FaExclamationTriangle} from 'react-icons/fa'

function error() {
    return (
        <Layout>
            <div className={styles.error}>
                <h1>
                    <FaExclamationTriangle></FaExclamationTriangle>
                    404
                </h1>
                <h4>We cant find anything in this page</h4>
                <Link href='/'><a>got o home</a></Link>
            </div>
        </Layout>
    );
}

export default error;