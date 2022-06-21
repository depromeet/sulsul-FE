import React, { useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { FieldValues } from 'react-hook-form';

import { $recordForm } from '../atoms';

import { useGetFlavors } from '@/queries';
import Emoji from '@/components/Emoji';
import EntityForm from '@/components/EntityForm';
import MultiSelectField from '@/components/formFields/MultiSelectField';
import BottomFloatingButtonArea from '@/components/BottomFloatingButtonArea';
import Button from '@/components/commons/Button';
import FormSubmitButton from '@/components/commons/FormSubmitButton';
import Icon from '@/components/commons/Icon';
import { SwiperLayoutChildProps } from '@/components/layouts/SwiperLayout';
import { IFlavor } from '@/apis';

const StyledRecordSecondStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  h2 {
    ${({ theme }) => theme.fonts.H2}
    text-align: center;
    margin-bottom: 10px;
  }

  p.body-2 {
    ${({ theme }) => theme.fonts.Body2}
    color: ${({ theme }) => theme.semanticColor.secondary};
    text-align: center;
    margin-bottom: 10px;
  }

  p.body-5 {
    ${({ theme }) => theme.fonts.Body5}
    color: ${({ theme }) => theme.color.whiteOpacity65};
    text-align: center;
    margin-bottom: 16px;
  }

  & .record-floating-area {
    left: 100vw;
    justify-content: space-between;
    padding: 0 20px;
  }

  & .button-inner {
    display: flex;
    align-items: center;
  }
`;

interface RecordSecondStepContainerProps extends SwiperLayoutChildProps {
  beerName: string;
  className?: string;
  defaultFlavorValue?: { id: number }[];
}

const RecordSecondStepContainer: React.FC<RecordSecondStepContainerProps> = ({
  defaultFlavorValue,
  beerName,
  className,
  onMovePrev,
  onMoveNext,
}) => {
  const { contents: flavors } = useGetFlavors();
  const [{ feel }, setRecordForm] = useRecoilState($recordForm);

  const flavorOptions = useMemo(
    () =>
      flavors?.map((flavor) => ({
        value: flavor.flavorId,
        label: flavor.content,
        key: flavor.flavorId,
      })) || [],
    [flavors],
  );

  const handleSubmit = useCallback(
    (data: FieldValues) => {
      console.log(data);
      setRecordForm((prev) => ({ ...prev, ...data }));
      onMoveNext?.();
    },
    [setRecordForm, onMoveNext],
  );

  return (
    <StyledRecordSecondStepContainer className={className}>
      <EntityForm
        onSubmit={handleSubmit}
        defaultValues={{ flavorIds: defaultFlavorValue?.map((flavor) => flavor.id) }}
        showDebug={false}
      >
        <h2>{'맥주 맛은 어땠나요?'}</h2>
        <p className="body-2">{beerName}</p>
        <p className="body-5">{'최대 3개까지 선택이 가능해요!'}</p>
        <MultiSelectField
          name="flavorIds"
          height="calc(100vh - 295px)"
          maxLength={3}
          options={flavorOptions}
          required
        />
        <BottomFloatingButtonArea className="record-floating-area">
          <Button
            type="primary"
            line
            onClick={onMovePrev}
            leftAddon={<Icon name="ArrowLeft" />}
            iconMargin={4}
          >
            {feel ? <Emoji feel={feel} size={20} /> : '이전'}
          </Button>
          <FormSubmitButton
            type="primary"
            htmlType="submit"
            rightAddon={<Icon name="ArrowRight" />}
            iconMargin={4}
            autoDisabled
          >
            다음
          </FormSubmitButton>
        </BottomFloatingButtonArea>
      </EntityForm>
    </StyledRecordSecondStepContainer>
  );
};

export default RecordSecondStepContainer;
