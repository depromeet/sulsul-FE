import styled from '@emotion/styled';
import html2canvas from 'html2canvas';
import { forwardRef, Ref, useCallback, useImperativeHandle, useRef, useState } from 'react';

import BeerTicket from '@/components/BeerTicket';
import { IRecord } from '@/apis/record';

interface Props {
  record: IRecord;
  className?: string;
}

export interface CreateImageRef {
  create: () => Promise<boolean>;
  download: () => boolean;
}
function CreateImage({ record, className }: Props, ref: Ref<CreateImageRef>) {
  const CONTAINER_ID = 'beerair-ticket-image';
  const containerRef = useRef<null | HTMLDivElement>(null);
  const canvasRef = useRef<null | HTMLCanvasElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useImperativeHandle(ref, () => ({
    create,
    download,
  }));

  const create = useCallback(async () => {
    if (containerRef.current == null) {
      return false;
    }
    try {
      const canvas = await html2canvas(containerRef.current, {
        useCORS: true,
        backgroundColor: 'transparent',
        onclone: function (clonedDoc) {
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
    if (imageSrc == null) {
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

  return (
    <>
      {/* NOTE: inline style로 넣어야 htmlToCnavas가 숨김 상태로 동작. css X */}
      <Container ref={containerRef} style={{ display: 'none' }} id={CONTAINER_ID}>
        <BeerTicket record={record} />
      </Container>

      {imageSrc && (
        <CreatedContainer className={className}>
          <img src={imageSrc} alt="" width="100%" height="auto" style={{ zIndex: 1001 }} />
          <H2>이미지를 꾹 눌러 저장해보세요</H2>
        </CreatedContainer>
      )}
    </>
  );
}
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
`;

const Container = styled.div`
  width: 500px;
  height: 500px;
  overflow: hidden;
`;

const H2 = styled.h2`
  ${({ theme }) => theme.fonts.H2}
  text-align: center;
  margin-bottom: 10px;
`;
