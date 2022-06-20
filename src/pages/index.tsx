import HomeContainer from '@/containers/HomeContainer';
import hasAuth from '@/hocs/hasAuth';

export { getServerSideProps } from '@/containers/HomeContainer';

export default hasAuth(HomeContainer);
