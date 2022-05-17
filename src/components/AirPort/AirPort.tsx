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
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 160%;
  color: #dddddd;
`;
const Eng = styled.div`
  font-weight: 700;
  font-size: 1.85rem;
  line-height: 29px;
  color: ${({ theme }) => theme.color.white};
`;
const Kor = styled.div`
  font-weight: 400;
  font-size: 0.77rem;
  line-height: 155.02%;
  color: #dddddd;
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
      <Icon name="FlyingAirplane" className="flying-airplane-icon" />
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

  & > .flying-airplane-icon {
    width: 33%;
    height: auto;
  }
`;
