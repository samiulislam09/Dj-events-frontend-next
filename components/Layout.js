import Head from 'next/head'
import { useRouter } from 'next/router';
import styles from '../styles/Layout.module.css'
import Footer from './Footer';
import Header from './Header';
import Showcase from './Showcase';

const Layout = ({ title, keywords, description, children }) => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{ title }</title>
                <meta name='description' content={description}  />
                <meta name='keywords' content={keywords}  />
            </Head>
            <Header></Header>
            {router.pathname=='/' && <Showcase></Showcase>}
            <div className={styles.container}>
                {children}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Layout;

Layout.defaultProps = {
    title: "Dj events",
    description: 'find the hottest dj in us',
    keywords: 'music, dj'
}