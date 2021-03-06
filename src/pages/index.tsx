import * as React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Layout from '../components/Layout/Layout';

import * as styles from '../styles/index.module.scss';

function IndexPage() {
  return (
    <Layout>
      <Helmet>
        <title>Szymon Polny - Website</title>
      </Helmet>
      <div className={styles.main}>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="noselect"
        >
          <h1>
            Hi, my name is
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <span className={styles.name}> Szymon</span> and I&apos;m{' '}
            {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
            <span className={styles.dev}>frontend</span>{' '}
            <span className={styles.dev}>developer</span>
          </h1>
          <div className={styles.icons}>
            <a href="https://github.com/szpolny">
              <FaGithub />
            </a>
            <a href="https://twitter.com/szpolny">
              <FaTwitter className={styles.twitter} />
            </a>
            <a href="https://www.linkedin.com/in/szymon-polny-9104011a9/">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

export default IndexPage;
