import { ReactNode } from 'react';
import styled from '@emotion/styled';

interface MainLayoutProps {
  children: ReactNode;
}

const StyledMain = styled.main`
  position: relative;
  max-width: 768px;
  min-height: 100vh;
  margin: 0 auto;

  background-color: ${(p) => p.theme.semanticColor.background};
`;

const MainLayout = ({ children }: MainLayoutProps) => {
  return <StyledMain>{children}</StyledMain>;
};

export default MainLayout;
