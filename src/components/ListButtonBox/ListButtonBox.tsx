import styled from '@emotion/styled';

import Icon, { IconNameType } from '@/components/commons/Icon';

interface ListButtonBoxProps {
  iconName: IconNameType;
  text: string;
  onClick?: () => void;
}
const ListButtonBox = (props: ListButtonBoxProps) => {
  const { iconName, text, onClick } = props;

  return (
    <StyledListButtonBox onClick={onClick}>
      <SmallBox>
        <Icon name={iconName} size={20} color={'white'} />
      </SmallBox>
      <Text>{text}</Text>
      <Icon name="Next" size={18} className="icon" />
    </StyledListButtonBox>
  );
};

export default ListButtonBox;

const StyledListButtonBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 14px;
  background-color: ${({ theme }) => theme.color.whiteOpacity20};
  border-radius: 8px;
  cursor: pointer;

  & > .icon {
    margin-left: auto;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.semanticColor.primary};
  border-radius: 4px;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.SubTitle2}
  color: ${({ theme }) => theme.color.white};
`;
