export default interface BlogListInterface {
  allMdx: {
    nodes: [
      {
        id: string;
        excerpt: string;
        frontmatter: {
          title: string;
          date: Date;
        };
      },
    ];
  };
}
