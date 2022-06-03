import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import styled from '@emotion/styled';

import {
  BackButton,
  CloseButton,
  ListViewToggleButton,
  OKTextButton,
  WriteButton,
  SaveButton,
  ShareButton,
  LikeToggleButton,
} from './extras';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    isTransparent: { control: 'boolean', defaultValue: false },
  },
  decorators: [
    (Story) => (
      <main>
        <Story />
        {Array(100)
          .fill(0)
          .map((_, index) => (
            <p key={index} style={{ color: 'white' }}>
              스크롤
            </p>
          ))}
      </main>
    ),
  ],
} as ComponentMeta<typeof Header>;

export const 뒤로가기_헤더: ComponentStoryObj<typeof Header> = {
  args: {
    leftExtras: <BackButton />,
    children: '제목',
  },
};

export const 닫기_확인_헤더: ComponentStoryObj<typeof Header> = {
  args: {
    leftExtras: <CloseButton />,
    rightExtras: <OKTextButton />,
  },
};

export const 맥주_리스트_페이지: ComponentStoryObj<typeof Header> = {
  args: {
    leftExtras: <BackButton />,
    rightExtras: <ListViewToggleButton type="grid" />,
    children: '검색창 컴포넌트',
  },
};

const StyledHeader = styled(Header)`
  transition: background-color 0.2s;
`;

const StyledBackButton = styled(BackButton)<{ isScrolled: boolean }>`
  svg {
    fill: ${(p) => (p.isScrolled ? p.theme.color.white : p.theme.color.whiteOpacity50)};
  }
`;

export const 맥주_상세_페이지: ComponentStoryObj<typeof Header> = {
  render: (args) => {
    const isScrolled = args.isTransparent ?? true;

    return (
      <StyledHeader
        {...args}
        isTransparent={isScrolled}
        leftExtras={<StyledBackButton isScrolled={isScrolled} />}
        {...(isScrolled && { children: '' })}
      />
    );
  },
  args: {
    rightExtras: [
      <ShareButton />,
      <LikeToggleButton
        defaultIsLiking={true}
        onLike={async () => alert('좋아요')}
        onUnLike={async () => alert('좋아요 해제')}
      />,
    ],
    children: '제주 위트 에일 에일 에일 에일 에일 에일 에일 에일 에일 에일 에일 에일',
    isTransparent: true,
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <p style={{ color: 'white' }}>
          맥주 상세 페이지 스토리만 아래처럼 동작하도록 설정했습니다.
          <br />
          isTransparent == true: 스크롤이 상단에 있을 때
          <br />
          isTransparent == false: 맥주 이름 영역 이상 스크롤을 내렸을 때
          <br />
          <br />
          (+ 하트 버튼을 눌러보세요!)
          <br />
          <br />
        </p>
      </>
    ),
  ],
};

const SearchHeader = styled(Header)`
  border-bottom: 1px solid ${(p) => p.theme.semanticColor.secondary};
`;

export const 맥주_검색_페이지: ComponentStoryObj<typeof Header> = {
  render: (args) => <SearchHeader {...args} />,
  args: {
    leftExtras: <BackButton />,
    children: '검색창 컴포넌트',
  },
};

export const 맥주_기록_상세_페이지: ComponentStoryObj<typeof Header> = {
  args: {
    leftExtras: <BackButton />,
    rightExtras: [<WriteButton />, <SaveButton />],
  },
};
