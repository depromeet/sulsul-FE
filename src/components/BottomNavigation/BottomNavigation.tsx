import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import PlusIconButton from '@/components/commons/PlusIconButton';
import Icon from '@/components/commons/Icon';

export default function BottomNavigation() {
  const router = useRouter();

  return (
    <StyledBottomNavigation>
      <Link href="/" passHref>
        <a className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}>
          {router.pathname === '/' ? (
            <Icon name="NavHomeActive" size={36} />
          ) : (
            <Icon name="NavHome" size={36} />
          )}
          <span>홈</span>
        </a>
      </Link>
      <Link href="/beer-list" passHref>
        <a className={`nav-link ${router.pathname === '/beer-list' ? 'active' : ''}`}>
          {router.pathname === '/beer-list' ? (
            <Icon name="NavBeerActive" size={36} />
          ) : (
            <Icon name="NavBeer" size={36} />
          )}
          <span>맥주목록</span>
        </a>
      </Link>
      <PlusIconButton />
      <Link href="/travel-list" passHref>
        <a className={`nav-link ${router.pathname === '/travel-list' ? 'active' : ''}`}>
          {router.pathname === '/travel-list' ? (
            <Icon name="NavTravelActive" size={36} />
          ) : (
            <Icon name="NavTravel" size={36} />
          )}
          <span>여행목록</span>
        </a>
      </Link>
      <Link href="/profile" passHref>
        <a className={`nav-link ${router.pathname === '/profile' ? 'active' : ''}`}>
          {router.pathname === '/profile' ? (
            <Icon name="NavProfileActive" size={36} />
          ) : (
            <Icon name="NavProfile" size={36} />
          )}
          <span>프로필</span>
        </a>
      </Link>
    </StyledBottomNavigation>
  );
}

const StyledBottomNavigation = styled.div`
position:sticky;
bottom: 0;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.whiteOpacity50};
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  background-color: ${({ theme }) => theme.semanticColor.background};
  padding: 0 15px;

  .nav-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.color.whiteOpacity50};

    span {
      margin-top: 3px;
    }

    &.active {
      span {
        color: ${({ theme }) => theme.semanticColor.primary};
      }
    }
  }
`;
