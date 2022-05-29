import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { FieldValues } from 'react-hook-form';

import { $recordForm } from '../atoms';
import { dummyOptions } from '../RecordSecondStepContainer/RecordSecondStepContainer';

import EntityForm from '@/components/EntityForm';
import ImageUploadField from '@/components/formFields/ImageUploadField';
import SelectField from '@/components/formFields/SelectField';
import TextAreaField from '@/components/formFields/TextAreaField';
import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import Button, { ButtonCount } from '@/components/commons/Button';
import FormSubmitButton from '@/components/commons/FormSubmitButton';
import { SwiperLayoutChildProps } from '@/components/layouts/SwiperLayout';
import Icon from '@/components/commons/Icon';
import { IBeer } from '@/apis';

interface RecordThirdStepContainerProps extends SwiperLayoutChildProps {
  beer: IBeer;
  className?: string;
}

const StyledRecordThirdStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & form {
    width: 100%;
  }

  h2 {
    ${({ theme }) => theme.fonts.H2}
    text-align: center;
    margin-bottom: 10px;
  }

  & p.body-1 {
    ${({ theme }) => theme.fonts.Body2}
    color: ${({ theme }) => theme.semanticColor.secondary};
    text-align: center;
    margin-bottom: 40px;
  }

  & span.body-1 {
    ${({ theme }) => theme.fonts.Body2}
    color: ${({ theme }) => theme.color.white};
  }

  & .switch-wrapper {
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .default-padding {
    padding: 0 20px;
  }

  & .record-floating-area {
    left: 200vw;
    justify-content: space-between;
    padding: 0 20px;
  }
`;

const defaultValues = {
  isPublic: false,
};

const RecordThirdStepContainer: React.FC<RecordThirdStepContainerProps> = ({
  beer,
  onMovePrev,
  onMoveNext,
}) => {
  const [{ flavor }, setRecordForm] = useRecoilState($recordForm);

  const handleSubmit = useCallback(
    (data: FieldValues) => {
      setRecordForm((prev) => ({ ...prev, ...data }));
      onMoveNext?.();
    },
    [setRecordForm, onMoveNext],
  );

  const beforeText =
    flavor?.[0] && dummyOptions.find((option) => Number(option.value) === flavor[0])?.label;

  return (
    <StyledRecordThirdStepContainer>
      <EntityForm onSubmit={handleSubmit} defaultValues={defaultValues} showDebug={false}>
        <h2>{'당신만의 맥주 이야기도 들려주세요'}</h2>
        <p className="body-1">{beer.nameKor}</p>
        <ImageUploadField name="imageUrl" beer={beer} required />
        <div className="switch-wrapper">
          <span>{'맥주 여행 소감 공개 여부'}</span>
          <SelectField name="isPublic" />
        </div>
        <div className="default-padding">
          <TextAreaField
            name="content"
            maxHeight="calc(100vh - 391px)"
            height="230px"
            placeholder={`이번 맥주 여행은 어떠셨나요?\n맥주를 마실 때 맛이나 후기를 적어도 좋아요.\n혹은 분위기, 상황은 어땠는지 추억을 남겨보세요!`}
            required
          />
        </div>
        <BottomFloatingButtonArea className="record-floating-area">
          <Button
            type="primary"
            line
            onClick={onMovePrev}
            leftAddon={<Icon name="ArrowLeft" />}
            iconMargin={4}
            count={flavor?.length as ButtonCount | undefined}
            maxWidth="44vw"
          >
            {beforeText || '이전'}
          </Button>
          <FormSubmitButton
            type="primary"
            htmlType="submit"
            onClick={onMoveNext}
            rightAddon={<Icon name="ArrowRight" />}
            iconMargin={4}
            autoDisabled
          >
            다음
          </FormSubmitButton>
        </BottomFloatingButtonArea>
      </EntityForm>
    </StyledRecordThirdStepContainer>
  );
};

export default RecordThirdStepContainer;
