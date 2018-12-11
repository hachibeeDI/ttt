import * as React from 'react';

import * as baseStyledComponents from 'styled-components';
import {ThemedStyledComponentsModule} from 'styled-components';
import reset from 'styled-reset';

import {Theme} from './theme';
import {createGlobalStyle} from './themed-styled-components';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;

    /* set base values */
    --text-base: 1.2rem;
    --text-scale-ratio: 1.333;

    /* type scale */
    --text-sm:   calc(var(--text-base) / var(--text-scale-ratio));
    --text-xs:   calc(var(--text-sm) / var(--text-scale-ratio));
    --text-xxs:  calc(var(--text-xs) / var(--text-scale-ratio));

    --text-md:   calc(var(--text-base) * var(--text-scale-ratio));
    --text-lg:   calc(var(--text-md) * var(--text-scale-ratio));
    --text-xl:   calc(var(--text-lg) * var(--text-scale-ratio));
    --text-xxl:  calc(var(--text-xl) * var(--text-scale-ratio));
    --text-xxxl: calc(var(--text-xxl) * var(--text-scale-ratio));


    /* spacing scale */
    --space-base: ${p => p.theme.spaceUnit};
    --space-xxs:  calc(0.25 * var(--space-base)); // 4px
    --space-xs:   calc(0.5 * var(--space-base));  // 8px
    --space-sm:   calc(0.75 * var(--space-base)); // 12px
    --space-md:   calc(1.25 * var(--space-base)); // 20px
    --space-lg:   calc(2 * var(--space-base));    // 32px
    --space-xl:   calc(3.25 * var(--space-base)); // 52px
    --space-xxl:  calc(5.25 * var(--space-base)); // 84px


    /* some of those may need to be a theme */
    --blue : #006CFF;
    --gray : #666666;
    --red : #FF003C;
    --green : #63ad0e;
    --orange : #ffc000;
    --viole : #7800ff;
    --pink : #ff56b1;

    --black: #1d1d21;
    --gray-10: #2e2e31;
    --gray-6: #7b7a7d;
    --gray-4: #a5a5a6;
    --gray-3: #bbbbbc;
    --gray-2: #d1d0d2;
    --gray-1: #e8e7e8;
    --white: white;

    --color-primary: ${p => p.theme.primary};

    --color-secondary: #7b7a7d;

    --color-text: ${p => p.theme.color.textBase};
    --color-border: var(--gray-2);

    --color-success: #88c459;
    --color-error: #f5414f;
    --color-warning: #ffd137;
  }

  html, body {
    font-size: 62.5%;  // to fix to 1rem = 10px
    font-family: var(--font-family-sans-serif);
    color: var(--color-text);
  }

  a {
    text-decoration: none;
    color: ${p => p.theme.primarySuperLight};
    border-bottom: 1px solid ${p => p.theme.primarySuperLight}80;
    &:hover {
      text-decoration: none;
      border-bottom: 2px solid ${p => p.theme.primarySuperLight}80;
    }
  }

  ul {
      margin: auto;
      padding: 0;
      list-style: none;
  }
  li {
      padding: 8px 0;
  }

  p, li, div, input {
    font-size: var(--text-base);
    color: var(--color-text);
  }
  p {
    line-height: calc(var(--text-base) * var(--text-scale-ratio));
  }

  .text--xxxl {
    font-size: var(--text-xxxl);
  }

  h1, .text--xxl {
    font-size: var(--text-xxl);
  }

  h2, .text--xl {
    font-size: var(--text-xl);
  }

  h3, .text--lg {
    font-size: var(--text-lg);
  }

  h4, .text--md {
    font-size: var(--text-md);
  }

  small, .text--sm {
    font-size: var(--text-sm);
  }

  .text--xs {
    font-size: var(--text-xs);
  }
`;
