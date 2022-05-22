import * as React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout/Layout';

import * as styles from '../styles/index.module.scss';

function IndexPage() {
  return (
    <Layout>
      <Helmet>
        <title>Szymon Polny - Website</title>
      </Helmet>
      <div className={styles.main}>
        <h1>Hi, my name is Szymon and I&apos;m frontend developer</h1>
      </div>
    </Layout>
  );
}

export default IndexPage;
