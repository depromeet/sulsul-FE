import { ReactNode } from 'react';
import styled from '@emotion/styled';

import {
  BackButton,
  CloseButton,
  LikeBeerToggleButton,
  BeerListViewToggleButton,
  OKTextButton,
  SaveButton,
  WriteButton,
  ShareButton,
} from '.';

export default {
  title: 'Components/Header/extras',
  argTypes: {
    type: { control: 'radio', options: ['grid', 'list'] },
  },
  args: {},
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  p {
    font-size: 14px;
    font-weight: 700;
    margin-right: 10px;
  }
`;

export const extras = () => {
  const renderExtra = (name: string, extra: ReactNode) => {
    return (
      <Row>
        <p>{name}</p>
        {extra}
      </Row>
    );
  };

  return (
    <Container>
      <h1>Header extras</h1>
      {renderExtra('BackButton', <BackButton />)}
      {renderExtra('CloseButton', <CloseButton />)}
      {renderExtra('ShareButton', <ShareButton />)}
      {renderExtra('LikeBeerToggleButton', <LikeBeerToggleButton isLiked={true} id={2} />)}
      {renderExtra('BeerListViewToggleButton', <BeerListViewToggleButton />)}
      {renderExtra('OKTextButton', <OKTextButton />)}
      {renderExtra('SaveButton', <SaveButton />)}
      {renderExtra('WriteButton', <WriteButton />)}
    </Container>
  );
};
