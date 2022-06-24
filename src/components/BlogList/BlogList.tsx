import React from 'react';
import * as styles from './BlogList.module.scss';

import BlogListInterface from '../../interfaces/BlogListInterface';

const BlogList = ({ data }: Props) => (
  <div className={styles.container}>
    <h1 className={styles.header}>My posts</h1>
    {data.allMdx.nodes.map(({ id, excerpt, frontmatter }) => (
      <div key={id}>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <p>{excerpt}</p>
      </div>
    ))}
  </div>
);

interface Props {
  data: BlogListInterface;
}

export default BlogList;
