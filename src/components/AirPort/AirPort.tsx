import styled from '@emotion/styled';

import Icon from '@/components/commons/Icon';

interface AirPortItemProps {
  title: string;
  kor: string;
  eng: string;
}

const AirPortItem = (props: AirPortItemProps) => {
  const { title, kor, eng } = props;
  return (
    <StyledAirPortItem>
      <Title>{title}</Title>
      <Eng>{eng}</Eng>
      <Kor>{kor}</Kor>
    </StyledAirPortItem>
  );
};

const StyledAirPortItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

const Title = styled.div`
  ${({ theme }) => theme.fonts.Body2};
  color: ${({ theme }) => theme.color.whiteOpacity65};
`;
const Eng = styled.div`
  ${({ theme }) => theme.fonts.BarlowBig};
  color: ${({ theme }) => theme.color.white};
`;
const Kor = styled.div`
  ${({ theme }) => theme.fonts.Body4};
  color: ${({ theme }) => theme.color.grey1};
`;

export interface AirPortProps {
  departureKor: string;
  departureEng: string;
  destinationKor: string;
  destinationEng: string;
  className?: string;
}

const AirPort = (props: AirPortProps) => {
  const {
    departureKor = '한국',
    departureEng = 'KOR',
    destinationKor,
    destinationEng,
    className,
    ...rest
  } = props;

  return (
    <StyledAirPort {...rest} className={className}>
      <AirPortItem title="출발지" kor={departureKor} eng={departureEng} />
      <Icon name="FlyingAirplane" width="33%" />
      <AirPortItem title="도착지" kor={destinationKor} eng={destinationEng} />
    </StyledAirPort>
  );
};

export default AirPort;

const StyledAirPort = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;
`;
