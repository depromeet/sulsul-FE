import React from 'react';
import styled from '@emotion/styled';

import EntityForm from '@/components/EntityForm';
import EmojiRadioField from '@/components/formFields/EmojiRadioField';
import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import Button from '@/components/commons/Button';
import { SwiperLayoutChildProps } from '@/components/SwiperLayout';

interface RecordFirstStepContainerProps extends SwiperLayoutChildProps {
  beerName: string;
  className?: string;
  onSubmit: () => void;
}

const StyledRecordFirstStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 110px);

  & h2 {
    ${({ theme }) => theme.fonts.H2}
    text-align: center;
    margin-bottom: 10px;
  }

  & p.body-2 {
    ${({ theme }) => theme.fonts.Body2}
    color: ${({ theme }) => theme.semanticColor.secondary};
    text-align: center;
    margin-bottom: 100px;
  }
`;

const RecordFirstStepContainer: React.FC<RecordFirstStepContainerProps> = ({
  beerName,
  className,
  onMoveNext,
  onSubmit,
}) => {
  return (
    <StyledRecordFirstStepContainer className={className}>
      <EntityForm onSubmit={onSubmit}>
        <h2>{'이번 맥주는 어땠나요?'}</h2>
        <p className="body-2">{beerName}</p>
        <EmojiRadioField name="feel" />
        <BottomFloatingButtonArea
          button={
            <Button type="primary" htmlType="submit" width="large" onClick={onMoveNext}>
              다음
            </Button>
          }
        />
      </EntityForm>
    </StyledRecordFirstStepContainer>
  );
};

export default RecordFirstStepContainer;
