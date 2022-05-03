import styled from '@emotion/styled';

import { XIcon } from '@/assets/icon';

interface ChipProps {
  text: string;
  onClose: () => void;
}

const StyledWrapper = styled.span`
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
  }

  button {
    flex-shrink: 0;
    svg {
      width: 8px;
      height: 8px;
      margin-left: 4px;
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
