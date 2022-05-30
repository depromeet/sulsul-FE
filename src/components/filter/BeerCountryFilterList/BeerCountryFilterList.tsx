import styled from '@emotion/styled';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';

import BeerCountryFilterItem from '../BeerCountryFilterItem';
import { $nextBeerListFilterChips } from '../BeerListFilterBottomSheet/recoil/atoms';
import { $selectedBeerCountryIds } from '../BeerListFilterBottomSheet/recoil/selectors';

import { getCountries, IContinent, ICountry } from '@/apis';

interface BeerCountryFilterListProps {
  continentId?: IContinent['id'];
}

const StyledWrapper = styled.div`
  display: grid;
  grid-gap: 16px 12px;
  grid-template-columns: repeat(auto-fill, minmax(90px, auto));
  justify-items: center;
  padding: 16px 20px;

  overflow-y: auto;
`;

const BeerCountryFilterList = ({ continentId }: BeerCountryFilterListProps) => {
  const [selectedCountryIds, setSelectedCountryIds] = useRecoilState($selectedBeerCountryIds);
  const [nextFilterChips, setNextFilterChips] = useRecoilState($nextBeerListFilterChips);

  const { data } = useQuery(
    ['countries', continentId],
    async () => await getCountries(continentId),
    { cacheTime: Infinity },
  );

  const countries = data?.data || [];

  const selectItem = (country: ICountry) => {
    setSelectedCountryIds([...selectedCountryIds, country.id]);
    setNextFilterChips([
      ...nextFilterChips,
      { id: country.id, text: country.nameKor, type: 'country' },
    ]);
  };

  const unselectItem = (country: ICountry) => {
    setSelectedCountryIds(selectedCountryIds.filter((countryId) => country.id !== countryId));
    setNextFilterChips(
      nextFilterChips.filter((v) => !(v.id === country.id && v.type === 'country')),
    );
  };

  const handleItemClick = (country: ICountry) => () => {
    const isSelected = selectedCountryIds.includes(country.id);
    isSelected ? unselectItem(country) : selectItem(country);
  };

  return (
    <StyledWrapper>
      {countries.map((country) => (
        <BeerCountryFilterItem
          key={country.id}
          {...country}
          isSelected={selectedCountryIds.includes(country.id)}
          onClick={handleItemClick(country)}
        />
      ))}
    </StyledWrapper>
  );
};

export default BeerCountryFilterList;
