import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

import {MAX_WIDTH} from './constants/size';

const HeaderComponent = styled.header`
  width: 100%;
  margin-bottom: 16px;
`;

const HeaderInner = styled.div`
  max-width: ${MAX_WIDTH}px;
  padding: 16px;
  margin: auto;
`;

const SiteTitle = styled.h1`
  color: var(--color-primary);
  margin: 0;
`;

interface Props {
  title: string;
  children?: React.ReactNode;
}

export default function Header({title, children}: Props) {
  return (
    <HeaderComponent>
      <HeaderInner>
        <SiteTitle>
          <Link
            to="/"
            style={{
              color: 'inherit',
            }}
          >
            {title}
          </Link>
        </SiteTitle>
        {children}
      </HeaderInner>
    </HeaderComponent>
  );
}
