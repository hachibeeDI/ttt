import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import {MAX_WIDTH} from './constants/size';

const FooterComponent = styled.footer`
  width: 100%;
  margin-bottom: 16px;
`;

const FooterInner = styled.div`
  max-width: ${MAX_WIDTH}px;
  padding: 16px;
  margin: auto;
`;

const SiteTitle = styled.h1`
  margin: 0;
`;

interface Props {
  title: string;
  children?: React.ReactNode;
}

export default function Footer({title, children}: Props) {
  return (
    <FooterComponent>
      <FooterInner>
        <SiteTitle>
          <Link
            to="/"
            style={{
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            {title}
          </Link>
        </SiteTitle>
        {children}
      </FooterInner>
    </FooterComponent>
  );
}
