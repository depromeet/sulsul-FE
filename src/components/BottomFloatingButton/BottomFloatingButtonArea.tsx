import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';

import HomeIconButton from '@/components/commons/HomeIconButton';
import Icon from '@/components/commons/Icon';
import Button from '@/components/commons/Button';

type BottomFloatingButtonAreaType = 'record' | 'recommand' | 'withHomeButton';

interface Props extends HTMLAttributes<HTMLDivElement> {
  type: BottomFloatingButtonAreaType;
  isOnlyHomeButton?: boolean;
}

const getButtonByType = (type: BottomFloatingButtonAreaType) => {
  switch (type) {
    case 'record':
      return (
        <Button type="primary" width="244px" rightAddon={<Icon name="FlightTakeOff" />}>
          기록하기
        </Button>
      );
    case 'recommand':
      return (
        <Button type="primary" width="244px" leftAddon={<Icon name="Random" />}>
          다른 맥주 추천 받기
        </Button>
      );
    case 'withHomeButton':
      return (
        <Button type="primary" width="244px">
          맥주 정보 보기
        </Button>
      );
    default:
      return undefined;
  }
};

const BottomFloatingButtonArea = (props: Props) => {
  const { type, isOnlyHomeButton = false } = props;

  return (
    <StyledBottomFloatingButton>
      {!isOnlyHomeButton && getButtonByType(type)}
      {type === 'withHomeButton' && <HomeIconButton />}
    </StyledBottomFloatingButton>
  );
};

export default BottomFloatingButtonArea;

const StyledBottomFloatingButton = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 40.1%);
`;
