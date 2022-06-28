import { InfiniteData, QueryKey, useMutation, useQueryClient } from 'react-query';

import { toggleLikeBeer, IBeer, IGetBeersResponseData, IGetBeersLikedResponseData } from '@/apis';
import { openSuccessToast, openFailToast } from '@/utils/toast';

export const useToggleLikeBeer = () => {
  const queryClient = useQueryClient();

  const updateBeersCache = (beerId: number, isLiked: boolean) => {
    const previousBeersPageData = queryClient.getQueriesData<InfiniteData<IGetBeersResponseData>>([
      'beers',
    ]);
    if (previousBeersPageData) {
      queryClient.setQueriesData<[QueryKey, InfiniteData<IGetBeersResponseData>][]>(
        ['beers'],
        (data) => {
          if (!data) {
            return previousBeersPageData;
          }

          return data.map(([key, previousPageData]) => [
            key,
            {
              ...previousPageData,
              pages: previousPageData.pages.map((page) => ({
                ...page,
                contents: page.contents.map((content) =>
                  content.id === beerId ? { ...content, isLiked } : content,
                ),
              })),
            },
          ]);
        },
      );
    }
  };

  const updateBeersLikedCache = (beerId: number, isLiked: boolean) => {
    const previousBeersLikedPageData = queryClient.getQueriesData<
      InfiniteData<IGetBeersLikedResponseData>
    >(['beersLiked']);
    if (previousBeersLikedPageData) {
      queryClient.setQueriesData<[QueryKey, InfiniteData<IGetBeersLikedResponseData>][]>(
        ['beersLiked'],
        (data) => {
          if (!data) {
            return previousBeersLikedPageData;
          }

          return data.map(([key, previousPageData]) => [
            key,
            {
              ...previousPageData,
              pages: previousPageData.pages.map((page) => ({
                ...page,
                contents: page.contents.map((content) =>
                  content.id === beerId ? { ...content, isLiked } : content,
                ),
              })),
            },
          ]);
        },
      );
    }
  };

  const result = useMutation(
    ({ beerId, isLiked }: { beerId: IBeer['id']; isLiked: boolean }) =>
      toggleLikeBeer(beerId, isLiked),
    {
      onMutate: ({ beerId, isLiked }) => {
        // queryClient.cancelQueries(['beer', id]); // 왜 있는 걸까?
        const previousBeer = queryClient.getQueryData<IBeer>(['beer', beerId]);
        if (previousBeer) {
          queryClient.setQueryData<IBeer>(['beer', beerId], {
            ...previousBeer,
            isLiked,
          });
        }
        return { previousBeer };
      },
      onSuccess: (_, { beerId, isLiked }) => {
        openSuccessToast({ message: '맥주를 반한 목록에 추가했어요.' });
        /** 맥주 목록 캐시 업데이트 */
        updateBeersCache(beerId, isLiked);
        /** 찜 목록 캐시 업데이트 */
        updateBeersLikedCache(beerId, isLiked);

        // 또는
        // queryClient.invalidateQueries(['beers']);
        // queryClient.invalidateQueries(['beersLiked']);
      },
      onError: (_err, { beerId }, context?: { previousBeer?: IBeer }) => {
        if (context?.previousBeer) {
          queryClient.setQueryData<IBeer>(['beer', beerId], context.previousBeer);
        }
        openFailToast({
          message: '맥주를 반한 목록 추가에 실패했어요. 잠시 후 다시 시도해주세요.',
        });
      },
    },
  );

  const { mutateAsync: toggleLikeBeerMutation } = result;

  return {
    ...result,
    likeBeer: (beerId: number) => toggleLikeBeerMutation({ beerId, isLiked: true }),
    unLikeBeer: (beerId: number) => toggleLikeBeerMutation({ beerId, isLiked: true }),
  };
};
