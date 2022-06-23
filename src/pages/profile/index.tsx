import ProfileContainer from '@/containers/ProfileContainer';
import hasAuth from '@/hocs/hasAuth';

export { getServerSideProps } from '@/containers/ProfileContainer';

export default hasAuth(ProfileContainer);
