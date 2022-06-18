import { FC } from 'react';
import styled from '@emotion/styled';

interface MarkdownProps {
  html: string;
  className?: string;
}

const Markdown: FC<MarkdownProps> = ({ html, className }) => {
  return <StyledMarkdown className={className} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default Markdown;

const StyledMarkdown = styled.div`
  ${(p) => p.theme.fonts.Body1};

  h1 {
    ${(p) => p.theme.fonts.H1};
  }
  h2 {
    ${(p) => p.theme.fonts.H2};
  }
  h3 {
    ${(p) => p.theme.fonts.H3};
  }
  h4 {
    ${(p) => p.theme.fonts.H4};
  }
  h5 {
    ${(p) => p.theme.fonts.H5};
  }
  h6 {
    ${(p) => p.theme.fonts.H6}
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 16px;
  }

  ol {
    list-style-type: decimal;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  ol ol,
  ul ol {
    list-style-type: lower-roman;
  }

  ul ul ol,
  ul ol ol,
  ol ul ol,
  ol ol ol {
    list-style-type: lower-alpha;
  }
`;
