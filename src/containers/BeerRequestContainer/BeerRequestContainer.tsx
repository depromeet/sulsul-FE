import { NextPage } from 'next';
import styled from '@emotion/styled';
import { FieldValues } from 'react-hook-form';
import { useCallback } from 'react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';

import Header, { HEADER_HEIGHT } from '@/components/Header';
import { BackButton } from '@/components/Header/extras';
import BeerRequestLayout from '@/components/layouts/BeerRequestLayout';
import MultiImageUploadField from '@/components/formFields/MultiImageUploadField';
import TextField from '@/components/formFields/TextField';
import EntityForm from '@/components/EntityForm';
import { uploadImages, createRequestBeer, ICreateRequestBeerPayload } from '@/apis';
import FormSubmitButton from '@/components/commons/FormSubmitButton';
import { useGtagPageView } from '@/hooks';
import { PAGE_TITLES } from '@/constants';

const BeerRequestContainer: NextPage = () => {
  useGtagPageView(PAGE_TITLES.BEER_REQUEST);

  const router = useRouter();

  const { mutateAsync: uploadImagesMutation } = useMutation(uploadImages);
  const { mutateAsync: createRequestBeerMutation } = useMutation(createRequestBeer);

  const handleSubmit = useCallback(
    async (data: FieldValues) => {
      try {
        await createRequestBeerMutation(data as ICreateRequestBeerPayload);
        router.push('/beer/request/complete');
      } catch (error) {
        console.error(error);
      }
    },
    [createRequestBeerMutation, router],
  );

  const handleImageUpload = useCallback(
    async (data: FormData) => {
      const imageUrl = await uploadImagesMutation(data);
      return imageUrl;
    },
    [uploadImagesMutation],
  );

  return (
    <>
      <Header leftExtras={<BackButton />} />
      <StyledEntityForm onSubmit={handleSubmit} showDebug={false}>
        <BeerRequestLayout title={`등록할 맥주의 정보를\n입력해 주세요`}>
          <StyledFieldsWrapper>
            <MultiImageUploadField
              maxLength={2}
              name="beerImageUrls"
              uploadCallback={handleImageUpload}
            />
            <TextField name="beerName" required placeholder="맥주의 이름은 무엇인가요?" />
          </StyledFieldsWrapper>
        </BeerRequestLayout>
        <StyledFormSubmitButton htmlType="submit" type="primary" width="large" autoDisabled>
          입력완료
        </StyledFormSubmitButton>
      </StyledEntityForm>
    </>
  );
};

export default BeerRequestContainer;

const StyledEntityForm = styled(EntityForm)`
  display: flex;
  flex-direction: column;
  min-height: ${`calc(100vh - ${HEADER_HEIGHT}px)`};
`;

const StyledFieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 37px 0 66px;

  > *:last-child {
    margin-top: 66px;
  }
`;

const StyledFormSubmitButton = styled(FormSubmitButton)`
  margin: auto auto 22px;
`;
