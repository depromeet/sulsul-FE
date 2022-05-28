import BeerListPageHeader from '@/components/BeerListPageHeader';
import BeerListFilterAndSorter from '@/components/BeerListFilterAndSorter';
import BeerListSearchResult from '@/components/BeerSearchResultList';

const BeerListContainer = () => {
  return (
    <>
      <BeerListPageHeader />
      <BeerListFilterAndSorter />
      <BeerListSearchResult />
    </>
  );
};

export default BeerListContainer;
