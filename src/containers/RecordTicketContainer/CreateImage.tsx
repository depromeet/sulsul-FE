import styled from '@emotion/styled';
import html2canvas from 'html2canvas';
import { forwardRef, Ref, useCallback, useImperativeHandle, useRef, useState } from 'react';

import BeerTicket from '@/components/BeerTicket';
import Button from '@/components/commons/Button';
import { IRecord } from '@/apis/record';
import { BEER_TICKET_WIDTH } from '@/components/BeerTicket/BeerTicket';
import { getOS } from '@/utils/getOS';

const CONTAINER_ID = 'beerair-ticket-image';

interface Props {
  record: IRecord;
  className?: string;
}

export interface CreateImageRef {
  create: () => Promise<boolean>;
  download: () => boolean;
}
const CreateImage = ({ record, className }: Props, ref: Ref<CreateImageRef>) => {
  const os = getOS();
  const containerRef = useRef<null | HTMLDivElement>(null);
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    create,
    download,
  }));

  const create = useCallback(async () => {
    if (!containerRef.current) {
      return false;
    }
    try {
      const canvas = await html2canvas(containerRef.current, {
        useCORS: true,
        backgroundColor: 'transparent',
        width: BEER_TICKET_WIDTH,
        onclone: (clonedDoc: any) => {
          const clonedContainerElem = clonedDoc.getElementById(CONTAINER_ID);
          if (clonedContainerElem) {
            clonedContainerElem.style.display = 'block';
          }
        },
      });
      if (canvasRef.current) {
        canvasRef.current.remove();
      }
      canvasRef.current = canvas;
      canvas.style.display = 'none';
      document.body.appendChild(canvas);
      const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
      setImageSrc(image);
      return true;
    } catch (error) {
      setImageSrc(null);
      console.log(error);
      return false;
    }
  }, []);

  const download = useCallback(() => {
    if (!imageSrc) {
      return false;
    }
    try {
      const a = document.createElement('a');
      a.setAttribute('download', 'beerair.png');
      a.setAttribute('href', imageSrc);
      a.click();
      canvasRef.current?.remove?.();
      return true;
    } catch (error) {
      return false;
    }
  }, [imageSrc]);

  const handleClose = useCallback(() => {
    setImageSrc(null);
  }, []);

  return (
    <>
      {/* NOTE: inline style로 넣어야 htmlToCnavas가 숨김 상태로 동작. css X */}
      <Container ref={containerRef} style={{ display: 'none' }} id={CONTAINER_ID}>
        <BeerTicket record={record} />
      </Container>

      {imageSrc !== null && (
        <CreatedContainer className={className} onClick={handleClose}>
          <img src={imageSrc} alt="created-beer-ticket-image" />
          {os === 'ios' && <Button onClick={download}>이미지를 꾹 눌러 저장해보세요</Button>}
          {(os === 'android' || os === 'web') && <Button onClick={download}>다운로드</Button>}
        </CreatedContainer>
      )}
    </>
  );
};
export default forwardRef(CreateImage);

const CreatedContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  overflow: hidden;

  & > img {
    width: 90%;
    height: auto;
    max-height: 80%;
    object-fit: contain;
    z-index: 1001;
    margin-bottom: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  overflow: hidden;
`;
