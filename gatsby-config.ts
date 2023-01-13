import type { GatsbyConfig } from 'gatsby';

// support for .env, .env.development, and .env.production
require('dotenv').config();
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-pnpm`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
  ],
  jsxRuntime: `automatic`,
};

export default config;
