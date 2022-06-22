import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

export const formatDateDiff = (date: Date) => {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000; // 현재 시간과의 차이(초)

  // 1분 미만일 때
  if (diff < 60 * 1) {
    return '방금 전';
  }
  // 3일 미만일 때
  if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(d, { addSuffix: true, locale: ko });
  }
  return format(d, 'yyyy.MM.dd', { locale: ko }); // 날짜 포맷
};
