import 'normalize.css';

import React, {ReactNode} from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

// Why gatsby doesn't accept it in html.js?  I totally hate bloated librally.
import {ThemeProvider} from '../styles/themed-styled-components';
import {GlobalStyle} from '../styles';
import {defaultTheme} from '../styles/theme';

import Header from './header';
import Footer from './footer';
import {MAX_WIDTH} from './constants/size';

const METADATA = [
  {name: 'description', content: 'AIの開発やコンサルティングを受け持つ株式会社AI-deaのホームページ。'},
  {name: 'keywords', content: 'AI,人工知能,機械学習,コンサルティング,教育'},
  {name: 'viewport', content: 'width=device-width,initial-scale=1'},
  {name: 'format-detection', content: 'telephone=no, email=no'},
];

export default function Layout({children}: {children: ReactNode}) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data: any) => (
        <>
          <Helmet title={data.site.siteMetadata.title} meta={METADATA}>
            <html lang="ja" />
          </Helmet>

          <ThemeProvider theme={defaultTheme}>
            <>
              <GlobalStyle />
              <Header title={data.site.siteMetadata.title} />
              <main
                style={{
                  margin: '0 auto',
                  maxWidth: MAX_WIDTH,
                  paddingTop: 0,
                }}
              >
                {children}
              </main>
              <Footer title={data.site.siteMetadata.title} />
            </>
          </ThemeProvider>
        </>
      )}
    />
  );
}
