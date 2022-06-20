import React from 'react';
import { useRecoilValue } from 'recoil';

import { $userSession } from '@/recoil/atoms';
import { useModal } from '@/hooks';
import LoginRequestModal from '@/components/LoginRequestModal';

const hasAuth =
  <T extends any>(Component: React.FC<T>): React.FC<T> =>
  // eslint-disable-next-line react/display-name
  (props) => {
    const { isOpen, close } = useModal(true);
    const userSession = useRecoilValue($userSession);

    if (!userSession) {
      return <LoginRequestModal isOpen={isOpen} onClose={close} />;
    }

    return <Component {...props} />;
  };

export default hasAuth;
