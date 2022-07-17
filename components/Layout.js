import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Footer from './Footer';
import Header from './Header';

const Layout = ({title, keywords, description, children}) => {
    return (
        <div>
            <Head>
                <title>{ title }</title>
                <meta name='description' content={description}  />
                <meta name='keywords' content={keywords}  />
            </Head>
            <Header></Header>
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