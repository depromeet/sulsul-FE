import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { useSetRecoilState } from 'recoil';
import { FieldValues } from 'react-hook-form';

import { $recordForm } from '../atoms';

import EntityForm from '@/components/EntityForm';
import EmojiRadioField from '@/components/formFields/EmojiRadioField';
import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import FormSubmitButton from '@/components/commons/FormSubmitButton';
import { SwiperLayoutChildProps } from '@/components/layouts/SwiperLayout';

interface RecordFirstStepContainerProps extends SwiperLayoutChildProps {
  beerName: string;
  className?: string;
  defaultFeelValue?: number;
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
  defaultFeelValue,
  beerName,
  className,
  onMoveNext,
}) => {
  const setRecordForm = useSetRecoilState($recordForm);

  const handleSubmit = useCallback(
    (data: FieldValues) => {
      setRecordForm((prev) => ({ ...prev, ...data }));
      onMoveNext?.();
    },
    [setRecordForm, onMoveNext],
  );

  return (
    <StyledRecordFirstStepContainer className={className}>
      <EntityForm
        onSubmit={handleSubmit}
        defaultValues={{ feel: defaultFeelValue || 3 }}
        showDebug={false}
      >
        <h2>{'이번 맥주는 어땠나요?'}</h2>
        <p className="body-2">{beerName}</p>
        <EmojiRadioField name="feel" />
        <BottomFloatingButtonArea
          button={
            <FormSubmitButton type="primary" htmlType="submit" width="large" autoDisabled>
              다음
            </FormSubmitButton>
          }
        />
      </EntityForm>
    </StyledRecordFirstStepContainer>
  );
};

export default RecordFirstStepContainer;
