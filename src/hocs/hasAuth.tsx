import React from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';

import { $userSession } from '@/recoil/atoms';

const hasAuth =
  <T extends any>(Component: React.FC<T>): React.FC<T> =>
  // eslint-disable-next-line react/display-name
  (props) => {
    const router = useRouter();
    const userSession = useRecoilValue($userSession);

    if (!userSession) {
      // TODO: 추후에 로그인 모달 추가
      router.replace('/login');
      return null;
    }

    return <Component {...props} />;
  };

export default hasAuth;
