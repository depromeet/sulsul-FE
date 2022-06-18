import { NextPage, GetStaticProps } from 'next';
import styled from '@emotion/styled';

import Header from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';
import { parseMarkdown } from '@/utils/parseMarkdown';
import Markdown from '@/components/Markdown';

interface PrivacyPolicyContainerProps {
  html: string;
}

const StyledPrivacyPolicyContainer = styled.div`
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

const PrivacyPolicyContainer: NextPage<PrivacyPolicyContainerProps> = ({
  html: privacyPolicyHtml,
}) => {
  useGtagPageView(PAGE_TITLES.PRIVACY_POLICY);

  return (
    <StyledPrivacyPolicyContainer>
      <Header leftExtras={<BackButton />}>개인정보 처리방침</Header>
      <StyledMarkdown html={privacyPolicyHtml} />
    </StyledPrivacyPolicyContainer>
  );
};

export default PrivacyPolicyContainer;

export const getStaticProps: GetStaticProps = async () => {
  const { default: markdown } = await import('contents/privacy-policy.md');
  const { html } = parseMarkdown(markdown);

  return {
    props: {
      html,
    },
  };
};
