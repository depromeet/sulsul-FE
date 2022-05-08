import React from 'react';
import styled from '@emotion/styled';

interface ErrorMessageProps {
  message: string;
}

const StyledErrorMessage = styled.div`
  color: ${({ theme }) => theme.color.red};
  font-size: 12px;
  font-weight: 700;
`;

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};

export default ErrorMessage;
