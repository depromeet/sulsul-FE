import { useCallback, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { format } from 'date-fns';

import Icon from '../commons/Icon';

import { ColorTheme } from '@/themes/types';

/** @todo 임시 타입 (심사중, 등록완료, 반려) */
type BeerRequestStatus = 'pending' | 'approved' | 'rejected';

/** @todo IBeerRequest(확정시)로 pick 해도록 리팩토링 */
interface RequestedBeerItemProps {
  id: number;
  beerNameKor: string;
  createdAt: Date;
  status: BeerRequestStatus;
  completedAt: Date;
}

const getBackgroundColor = (status: BeerRequestStatus, theme: ColorTheme) =>
  ({
    pending: theme.color.yellow,
    approved: theme.color.blue,
    rejected: theme.color.white,
  }[status]);

const getNameColor = (status: BeerRequestStatus, theme: ColorTheme) =>
  ({
    pending: theme.color.black100,
    approved: theme.color.white,
    rejected: theme.color.black100,
  }[status]);

const getCreatedAtColor = (status: BeerRequestStatus, theme: ColorTheme) =>
  ({
    pending: theme.color.grey4,
    approved: theme.color.whiteOpacity80,
    rejected: theme.color.grey3,
  }[status]);

const getForegroundColor = (status: BeerRequestStatus, theme: ColorTheme) =>
  ({
    pending: theme.color.grey5,
    approved: theme.color.white,
    rejected: theme.color.grey5,
  }[status]);

const getStatusText = (status: BeerRequestStatus) =>
  ({
    pending: '심사중',
    approved: '등록완료',
    rejected: '반려',
  }[status]);

const StyledRequestedBeerItem = styled.li<{ status: BeerRequestStatus }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;

  background-color: ${(p) => getBackgroundColor(p.status, p.theme)};

  > .info {
    display: flex;
    align-items: center;
    height: 80px;

    .name-and-date {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 0 15px;

      .name {
        ${(p) => p.theme.fonts.SubTitle2};
        color: ${(p) => getNameColor(p.status, p.theme)};
      }

      .created-at {
        ${(p) => p.theme.fonts.Body4};
        margin: 7px 0 0;
        color: ${(p) => getCreatedAtColor(p.status, p.theme)};
      }
    }

    .status {
      ${(p) => p.theme.fonts.Body2};
      color: ${(p) => getForegroundColor(p.status, p.theme)};
    }

    .toggle-open-button {
      padding: 0 24px 0 12px;
      height: 100%;
    }
  }
`;

const StyledDetailInfo = styled.div<{ isOpen: boolean } & Pick<RequestedBeerItemProps, 'status'>>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(p) => (p.isOpen ? '92px' : '0')};
  margin: 0 14px;
  ${(p) => (p.isOpen ? `border-top: 1px solid ${p.theme.color.grey1};` : '')}

  transition: 0.3s height;

  > p {
    margin: 0 0 0 15px;
    white-space: pre-line;
    ${(p) => p.theme.fonts.Body5};
    color: ${(p) => getForegroundColor(p.status, p.theme)};
  }
`;

const RequestedBeerItem: React.FC<RequestedBeerItemProps> = ({
  beerNameKor,
  createdAt,
  status,
  completedAt,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <StyledRequestedBeerItem status={status}>
      <div className="info">
        <Icon name="BarcodeVertical" width="22px" height="54px" />
        <div className="name-and-date">
          <b className="name">{beerNameKor}</b>
          <p className="created-at">요청일자 | {format(createdAt, 'yyyy-MM-dd')}</p>
        </div>
        <p className="status">{getStatusText(status)}</p>
        <button type="button" className="toggle-open-button" onClick={toggleOpen}>
          <Icon
            name={isOpen ? 'ChevronUp' : 'ChevronDown'}
            color={status === 'approved' ? 'white' : 'black100'}
            size={20}
          />
        </button>
      </div>
      <StyledDetailInfo ref={ref} isOpen={isOpen} status={status}>
        {/** @todo 심사중, 등록 완료인 경우 디자인 생기면 반영하기 */}
        {isOpen && (
          <>
            <Icon name="CheckCircleOutline" color="black100" size={24} />
            {!!completedAt && (
              <p>
                {format(completedAt, 'yyyy-MM-dd')} 기준 등록 반려되었습니다.{'\n'}요청하신 맥주가
                존재하지 않습니다.
              </p>
            )}
          </>
        )}
      </StyledDetailInfo>
    </StyledRequestedBeerItem>
  );
};

export default RequestedBeerItem;
