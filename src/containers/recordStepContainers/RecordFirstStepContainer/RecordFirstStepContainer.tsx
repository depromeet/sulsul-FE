import React from 'react';
import styled from '@emotion/styled';

import EntityForm from '@/components/EntityForm';
import EmojiRadioField from '@/components/formFields/EmojiRadioField';

interface RecordFirstStepContainerProps {
  beerName: string;
  className?: string;
  onSubmit: () => void;
}

const StyledRecordFirstStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    ${({ theme }) => theme.fonts.H2}
    text-align: center;
    margin-bottom: 10px;
  }

  p.body-1 {
    ${({ theme }) => theme.fonts.Body2}
    color: ${({ theme }) => theme.semanticColor.secondary};
    text-align: center;
    margin-bottom: 100px;
  }
`;

const RecordFirstStepContainer: React.FC<RecordFirstStepContainerProps> = ({
  beerName,
  className,
  onSubmit,
}) => {
  return (
    <StyledRecordFirstStepContainer className={className}>
      <EntityForm onSubmit={onSubmit}>
        <h2>{'이번 맥주는 어땠나요?'}</h2>
        <p className="body-1">{beerName}</p>
        <EmojiRadioField name="feel" />
      </EntityForm>
    </StyledRecordFirstStepContainer>
  );
};

export default RecordFirstStepContainer;
