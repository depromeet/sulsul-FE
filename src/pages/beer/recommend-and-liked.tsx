import { isNil } from 'lodash';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import BeerRecommendAndLikedContainer from '@/containers/BeerRecommendAndLikedContainer';
import { useGtagPageView } from '@/hooks';
import QueryParams from '@/utils/query-params';

/**
 * tab="recommend" : 추천 맥주 목록
 * tab="liked" : 반한 맥주 목록
 */
const BeerRecommendAndLikedPage = () => {
  const [activatedIndex, setActivatedIndex] = useActivatedIndex();

  useGtagPageView(activatedIndex === 1 ? '반한 맥주 목록' : '추천 맥주 목록');

  return (
    <BeerRecommendAndLikedContainer
      activatedIndex={activatedIndex}
      setActivatedIndex={setActivatedIndex}
    />
  );
};

export default BeerRecommendAndLikedPage;

type TabType = 'recommend' | 'liked';

const tabToIndex = (tab: TabType): number => {
  return tab === 'liked' ? 1 : 0;
};

const indexToTab = (index: number): TabType => {
  return index === 1 ? 'liked' : 'recommend';
};

const useActivatedIndex = (): [number, Dispatch<SetStateAction<number>>] => {
  const {
    query: { tab },
  } = useRouter();
  const parsedTab = !isNil(tab) ? JSON.parse(tab.toString()) : undefined;

  const [activatedIndex, setActivatedIndex] = useState(tabToIndex(parsedTab));

  useEffect(() => {
    QueryParams.set('tab', indexToTab(activatedIndex));
  }, [activatedIndex]);

  return [activatedIndex, setActivatedIndex];
};
