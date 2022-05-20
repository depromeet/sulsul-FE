import React from 'react';
import styled from '@emotion/styled';

import { Beer } from '@/types/Beer';
import EntityForm from '@/components/EntityForm';
import ImageUploadField from '@/components/formFields/ImageUploadField';
import SelectField from '@/components/formFields/SelectField';
import TextAreaField from '@/components/formFields/TextAreaField';

interface RecordThirdStepContainerProps {
  beer: Beer;
  className?: string;
  onSubmit: () => void;
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
`;

const RecordThirdStepContainer: React.FC<RecordThirdStepContainerProps> = ({ beer, onSubmit }) => {
  return (
    <StyledRecordThirdStepContainer>
      <EntityForm onSubmit={onSubmit}>
        <h2>{'당신만의 맥주 이야기도 들려주세요'}</h2>
        <p className="body-1">{beer.name}</p>
        <ImageUploadField name="imageUrl" beer={beer} />
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
          />
        </div>
      </EntityForm>
    </StyledRecordThirdStepContainer>
  );
};

export default RecordThirdStepContainer;
