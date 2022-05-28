import BeerListPageHeader from '@/components/BeerListPageHeader';
import BeerListFilterAndSorter from '@/components/BeerListFilterAndSorter';
import BeerListSearchResult from '@/components/BeerSearchResultList';
import BottomNavigation from '@/components/BottomNavigation';

const BeerListContainer = () => {
  return (
    <>
      <BeerListPageHeader />
      <BeerListFilterAndSorter />
      <BeerListSearchResult />
      <BottomNavigation />
    </>
  );
};

export default BeerListContainer;
