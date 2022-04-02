import React from 'react';
import styled from '@emotion/styled';

interface StyledSampleProps {
  buttonType: 'default' | 'primary';
}

const StyledSample = styled.button<StyledSampleProps>`
  background-color: ${({ buttonType, theme }) =>
    buttonType === 'default' ? 'rgba(0,0,0,0)' : theme.sample.BUTTON_PRIMARY};
  color: ${({ buttonType, theme }) =>
    buttonType === 'default' ? theme.sample.BUTTON_DEFAULT_FONT : theme.sample.PRIMARY};
  border: none;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 900;
  transition: opacity 0.5s;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }
`;

interface ButtonProps {
  type?: 'default' | 'primary';
  text: string;
  onClick?: () => void;
}

const Sample: React.FC<ButtonProps> = ({ type = 'default', text, onClick }) => {
  return (
    <StyledSample onClick={onClick} buttonType={type}>
      {text}
    </StyledSample>
  );
};

export default Sample;
