import BeerList from '../BeerList';
import BeerSearchResultEmpty from '../BeerSearchResultEmpty';

import { IBeer } from '@/apis';

interface BeerSearchResultListProps {
  query?: string;
  isLoading: boolean;
  beers?: IBeer[];
  lastItemRef?: any;
}

const BeerSearchResultList = ({
  query,
  isLoading,
  beers,
  lastItemRef,
}: BeerSearchResultListProps) => {
  if (isLoading || !beers) {
    return null;
  }

  if (!beers.length) {
    return (
      <BeerSearchResultEmpty
        title={query ? `“${query}”\n맥주를 찾을 수 없어요.` : `조건에 맞는\n맥주를 찾을 수 없어요.`}
        subtitle={
          query
            ? `잘못된 검색어를 입력하였거나,\n등록되지 않은 맥주예요.`
            : '검색 조건을 변경해보세요.'
        }
      />
    );
  }

  return <BeerList beers={beers} lastItemRef={lastItemRef} />;
};

export default BeerSearchResultList;
