import styled from '@emotion/styled';
import { isNil } from 'lodash';

import Icon, { IconNameType } from '@/components/commons/Icon';

interface ListButtonBoxProps {
  iconName: IconNameType;
  text: string;
  count?: string;
  onClick?: () => void;
}
const ListButtonBox = (props: ListButtonBoxProps) => {
  const { iconName, text, count, onClick } = props;

  return (
    <StyledListButtonBox onClick={onClick}>
      <SmallBox>
        <Icon name={iconName} size={iconName === 'Heart' ? 30 : 20} color="white" />
      </SmallBox>
      <Text>
        <p>{text}</p>
        {!isNil(count) && <p>{count}개</p>}
      </Text>
      <Icon name="Next" size={20} className="arrow-icon" />
    </StyledListButtonBox>
  );
};

export default ListButtonBox;

const StyledListButtonBox = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 14px;
  background-color: ${({ theme }) => theme.color.whiteOpacity20};
  border-radius: 8px;
  cursor: pointer;

  & > .arrow-icon {
    margin-left: 12px;
    margin-right: 4px;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const SmallBox = styled.div`
  width: 42px;
  height: 42px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.semanticColor.primary};
  border-radius: 4px;
`;

const Text = styled.div`
  ${({ theme }) => theme.fonts.SubTitle2}
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
