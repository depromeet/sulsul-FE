import { GetStaticProps, NextPage } from 'next';
import styled from '@emotion/styled';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import { parseMarkdown } from '@/utils/parseMarkdown';
import Markdown from '@/components/Markdown';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

interface TermsOfServiceContainerProps {
  html: string;
}

const StyledTermsOfServiceContainer = styled.div`
  white-space: pre-line;
  & > section {
    padding: 0 20px;

    & > h1 {
      ${({ theme }) => theme.fonts.SubTitle1};
    }

    & > p {
      ${({ theme }) => theme.fonts.Body1};
      font-weight: 400;
    }
  }
`;

const StyledMarkdown = styled(Markdown)`
  padding: 20px;
`;

const TermsOfServiceContainer: NextPage<TermsOfServiceContainerProps> = ({
  html: termsOfServiceHtml,
}) => {
  useGtagPageView(PAGE_TITLES.TERMS_OF_SERVICE);

  return (
    <StyledTermsOfServiceContainer>
      <Header leftExtras={<BackButton />}>서비스 정책 약관</Header>
      <StyledMarkdown html={termsOfServiceHtml} />
    </StyledTermsOfServiceContainer>
  );
};

export default TermsOfServiceContainer;

export const getTermsOfServiceHtml = async () => {
  const { default: markdown } = await import('contents/terms-of-service.md');
  const { html } = parseMarkdown(markdown);
  return html;
};

export const getStaticProps: GetStaticProps = async () => {
  const html = await getTermsOfServiceHtml();

  return {
    props: {
      html,
    },
  };
};
