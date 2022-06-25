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

const StyledEntityForm = styled(EntityForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const StyledTitle = styled.h2`
  ${({ theme }) => theme.fonts.H2}
  text-align: center;
  margin-bottom: 10px;
`;

const StyledBeerName = styled.p`
  ${({ theme }) => theme.fonts.Body2}
  color: ${({ theme }) => theme.semanticColor.secondary};
  text-align: center;
`;

const StyledEmojiRadioField = styled(EmojiRadioField)`
  flex: 1;
  padding: 10vh 0 37px 0;
  overflow-y: auto;
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
    <StyledEntityForm
      onSubmit={handleSubmit}
      defaultValues={{ feel: defaultFeelValue || 3 }}
      showDebug={false}
      className={className}
    >
      <StyledTitle>이번 맥주는 어땠나요?</StyledTitle>
      <StyledBeerName>{beerName}</StyledBeerName>
      <StyledEmojiRadioField name="feel" />
      <BottomFloatingButtonArea
        button={
          <FormSubmitButton type="primary" htmlType="submit" width="large" autoDisabled>
            다음
          </FormSubmitButton>
        }
      />
    </StyledEntityForm>
  );
};

export default RecordFirstStepContainer;
