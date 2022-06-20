import { useCallback, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { format, parseISO } from 'date-fns';

import Icon from '../commons/Icon';

import { ColorTheme } from '@/themes/types';
import { IRequestBeer, IRequestBeerStatus } from '@/apis';

const DEFAULT_REQUEST_REJECTION_REASON = '요청하신 맥주가 존재하지 않습니다.';

interface RequestedBeerItemProps
  extends Pick<
    IRequestBeer,
    'beerName' | 'createdAt' | 'requestCompletedAt' | 'requestRejectionReason' | 'status'
  > {}

const getBackgroundColor = (status: IRequestBeerStatus, theme: ColorTheme) =>
  ({
    [IRequestBeerStatus.PENDING]: theme.color.yellow,
    [IRequestBeerStatus.APPROVED]: theme.color.blue,
    [IRequestBeerStatus.REJECTED]: theme.color.white,
  }[status]);

const getNameColor = (status: IRequestBeerStatus, theme: ColorTheme) =>
  ({
    [IRequestBeerStatus.PENDING]: theme.color.black100,
    [IRequestBeerStatus.APPROVED]: theme.color.white,
    [IRequestBeerStatus.REJECTED]: theme.color.black100,
  }[status]);

const getCreatedAtColor = (status: IRequestBeerStatus, theme: ColorTheme) =>
  ({
    [IRequestBeerStatus.PENDING]: theme.color.grey4,
    [IRequestBeerStatus.APPROVED]: theme.color.whiteOpacity80,
    [IRequestBeerStatus.REJECTED]: theme.color.grey3,
  }[status]);

const getStatusColor = (status: IRequestBeerStatus, theme: ColorTheme) =>
  ({
    [IRequestBeerStatus.PENDING]: theme.color.grey5,
    [IRequestBeerStatus.APPROVED]: theme.color.white,
    [IRequestBeerStatus.REJECTED]: theme.color.grey5,
  }[status]);

const getStatusText = (status: IRequestBeerStatus) =>
  ({
    [IRequestBeerStatus.PENDING]: '심사중',
    [IRequestBeerStatus.APPROVED]: '등록완료',
    [IRequestBeerStatus.REJECTED]: '반려',
  }[status]);

const StyledRequestedBeerItem = styled.li<{ status: IRequestBeerStatus }>`
  display: flex;
  flex-direction: column;
  width: calc(100% - 40px);
  border-radius: 10px;
  margin: 0 20px 12px;

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
      color: ${(p) => getStatusColor(p.status, p.theme)};
      ${(p) => (p.status !== IRequestBeerStatus.REJECTED ? 'margin: 0 25px 0 0;' : '')}
    }

    .toggle-open-button {
      padding: 0 24px 0 12px;
      height: 100%;
    }
  }
`;

const StyledDetailInfo = styled.div<{ isOpen: boolean }>`
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
    color: ${(p) => p.theme.color.grey5};
  }
`;

const RequestedBeerItem: React.FC<RequestedBeerItemProps> = ({
  beerName,
  createdAt,
  status,
  requestCompletedAt,
  requestRejectionReason,
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
          <b className="name">{beerName}</b>
          <p className="created-at">요청일자 | {format(parseISO(createdAt), 'yyyy.MM.dd')}</p>
        </div>
        <p className="status">{getStatusText(status)}</p>
        {status === IRequestBeerStatus.REJECTED && (
          <button type="button" className="toggle-open-button" onClick={toggleOpen}>
            <Icon name={isOpen ? 'ChevronUp' : 'ChevronDown'} color="black100" size={20} />
          </button>
        )}
      </div>
      {status === IRequestBeerStatus.REJECTED && (
        <StyledDetailInfo ref={ref} isOpen={isOpen}>
          {isOpen && (
            <>
              <Icon name="CheckCircleOutline" color="black100" size={24} />
              <p>
                {!!requestCompletedAt &&
                  `${format(
                    parseISO(requestCompletedAt),
                    'yyyy.MM.dd',
                  )} 기준 등록 반려되었습니다.\n`}
                {requestRejectionReason || DEFAULT_REQUEST_REJECTION_REASON}
              </p>
            </>
          )}
        </StyledDetailInfo>
      )}
    </StyledRequestedBeerItem>
  );
};

export default RequestedBeerItem;
