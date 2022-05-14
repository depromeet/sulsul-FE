import styled from '@emotion/styled';

import { FlyingAirplaneIcon } from '@/assets/icon';

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
      <Kor>{kor}</Kor>
      <Eng>{eng}</Eng>
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
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 160%;
  color: #dddddd;
`;
const Kor = styled.div`
  font-weight: 700;
  font-size: 1.85rem;
  line-height: 29px;
  color: ${({ theme }) => theme.color.white};
`;
const Eng = styled.div`
  font-weight: 400;
  font-size: 0.77rem;
  line-height: 155.02%;
  color: #dddddd;
`;

interface AirPortProps {
  departureKor: string;
  departureEng: string;
  destinationKor: string;
  destinationEng: string;
}

const AirPort = (props: AirPortProps) => {
  const { departureKor, departureEng, destinationKor, destinationEng, ...rest } = props;

  return (
    <StyledAirPort {...rest}>
      <AirPortItem title="출발지" kor={departureKor} eng={departureEng} />
      <StyledFlyingAirplaneIcon />
      <AirPortItem title="도착지" kor={destinationKor} eng={destinationEng} />
    </StyledAirPort>
  );
};

export default AirPort;

const StyledAirPort = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
const StyledFlyingAirplaneIcon = styled(FlyingAirplaneIcon)`
  width: 8.38rem;
  padding-bottom: 10px;
`;
