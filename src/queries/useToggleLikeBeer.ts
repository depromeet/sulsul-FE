import { InfiniteData, QueryKey, useMutation, useQueryClient } from 'react-query';

import { toggleLikeBeer, IBeer, IGetBeersResponseData, IGetBeersLikedResponseData } from '@/apis';
import { openSuccessToast, openFailToast } from '@/utils/toast';

export const useToggleLikeBeer = () => {
  const queryClient = useQueryClient();

  const updateBeersCache = (beerId: number, isLiked: boolean) => {
    const previousBeersPageData = queryClient.getQueriesData<InfiniteData<IGetBeersResponseData>>([
      'beers',
    ]);

    if (!previousBeersPageData?.length) {
      return;
    }

    queryClient.setQueriesData<InfiniteData<IGetBeersResponseData>>(['beers'], (data) => {
      if (!data) {
        return data as unknown as InfiniteData<IGetBeersResponseData>;
      }

      return {
        ...data,
        pages: data.pages.map((page) => ({
          ...page,
          contents: page.contents.map((content) =>
            content.id === beerId ? { ...content, isLiked } : content,
          ),
        })),
      };
    });
  };

  const getSuccessMessage = (isLiked: boolean) => {
    return isLiked ? '맥주를 반한 목록에 추가했어요.' : '맥주를 반한 목록에서 삭제했어요.';
  };

  const getFailMessage = (isLiked: boolean) => {
    return isLiked
      ? '맥주를 반한 목록 추가에 실패했어요. 잠시 후 다시 시도해주세요.'
      : '맥주를 반한 목록에서 삭제하지 못했어요. 잠시 후 다시 시도해주세요.';
  };

  const result = useMutation(
    ({ beerId, isLiked }: { beerId: IBeer['id']; isLiked: boolean }) =>
      toggleLikeBeer(beerId, isLiked),
    {
      onMutate: ({ beerId, isLiked }) => {
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
        console.log('isLiked', isLiked);
        openSuccessToast({ message: getSuccessMessage(isLiked) });
        /** 맥주 목록 캐시 업데이트 */
        updateBeersCache(beerId, isLiked);

        // 또는
        // queryClient.invalidateQueries(['beers']);
        /** 반한 맥주 목록 다시 가져오기 */
        queryClient.invalidateQueries(['beersLiked']);
      },
      onError: (_err, { beerId, isLiked }, context?: { previousBeer?: IBeer }) => {
        if (context?.previousBeer) {
          queryClient.setQueryData<IBeer>(['beer', beerId], context.previousBeer);
        }
        openFailToast({
          message: getFailMessage(isLiked),
        });
      },
    },
  );

  const { mutateAsync: toggleLikeBeerMutation } = result;

  return {
    ...result,
    likeBeer: (beerId: number) => toggleLikeBeerMutation({ beerId, isLiked: true }),
    unLikeBeer: (beerId: number) => toggleLikeBeerMutation({ beerId, isLiked: false }),
  };
};
