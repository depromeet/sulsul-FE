import { useQuery } from 'react-query';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { isNil } from 'lodash';

import BeerList from '../BeerList';
import BeerSearchResultEmpty from '../BeerSearchResultEmpty';

import {
  $beerListFilter,
  $beerListSortBy,
  $beerListViewType,
} from '@/containers/BeerListContainer/recoil/atoms';
import { getBeers } from '@/apis';

const BeerSearchResultList = () => {
  const router = useRouter();
  const query = isNil(router.query.query) ? undefined : decodeURI(String(router.query.query));

  const listViewType = useRecoilValue($beerListViewType);
  const filter = useRecoilValue($beerListFilter);
  const sortBy = useRecoilValue($beerListSortBy);

  const payload = {
    query,
    filter,
    sortBy: [sortBy],
  };

  const { data } = useQuery(['beers', payload], () =>
    getBeers({
      ...payload,
      cursor: 0,
      limit: 20,
    }),
  );

  const beers = data?.contents;

  if (!beers) {
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

  return <BeerList type={listViewType} beers={beers} />;
};

export default BeerSearchResultList;
