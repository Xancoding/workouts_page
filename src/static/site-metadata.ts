interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Workouts Map',
  siteUrl: 'https://xancoding.cn/',
  logo: 'https://bu.dusays.com/2023/04/29/644cd8c3b45b9.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: 'Blog',
      url: 'https://xancoding.cn/',
    },
    {
      name: 'About',
      url: 'https://github.com/Xancoding/workouts_page/blob/master/README-CN.md',
    },
  ],
};

export default data;
