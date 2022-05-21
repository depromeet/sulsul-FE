import styled from '@emotion/styled';

import { XIcon } from '@/assets/icon';

interface ChipProps {
  text: string;
  onClose: () => void;
}

const StyledWrapper = styled.span`
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: fit-content;
  min-width: 62px;
  padding: 6px 10px 6px 14px;
  border-radius: 14px;
  background-color: ${(p) => p.theme.semanticColor.secondary};

  p {
    white-space: nowrap;
    color: ${(p) => p.theme.color.grey5};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    margin-left: 8px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: ${(p) => p.theme.color.grey5};

    svg {
      width: 12px;
      height: 12px;
      fill: ${(p) => p.theme.color.grey4};
    }
  }

  & + span {
    margin-left: 10px;
  }
`;

const Chip = ({ text, onClose }: ChipProps) => {
  return (
    <StyledWrapper>
      <p>{text}</p>
      <button type="button" onClick={onClose}>
        <XIcon />
      </button>
    </StyledWrapper>
  );
};

export default Chip;
