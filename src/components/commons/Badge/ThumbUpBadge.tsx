import Badge from './Badge';

import { ThumbUpIcon } from '@/assets/icon';

interface Props {
  likeCount?: number;
}

const ThumbUpBadge = (props: Props) => {
  const { likeCount } = props;

  return (
    <Badge type="primary" size="large" leftAddon={<ThumbUpIcon />} width="65px">
      {likeCount}
    </Badge>
  );
};

export default ThumbUpBadge;
