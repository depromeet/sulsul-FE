import React, { useState } from 'react';
import styled from '@emotion/styled';

import { ReactComponent as BookmarkIcon } from '@/assets/bookmark.svg';
import { ReactComponent as BookmarkIconFill } from '@/assets/bookmark_fill.svg';

// TODO: 페이지 단위에서 mock data 만들며 하드코딩한 이미지, 이름 등 맥주 정보 prop으로 받도록 수정하기

const BeerListItem = () => {
  const [isBookMarked, setIsBookmarked] = useState(false);

  return (
    <BeerListItemContainer style={{ margin: '50px' }}>
      {/* NOTE: style linie은 storybook에서 안보여서 임시로 추가*/}
      <ColorBar />
      <Emoji src="https://static.toss.im/2d-emojis/svg/u1F619.svg" />
      <BookmarkButton onClick={() => setIsBookmarked((prev) => !prev)}>
        {isBookMarked ? <BookmarkIconFill /> : <BookmarkIcon />}
      </BookmarkButton>
      <BeerImageMask>
        <BeerImage src="https://ifh.cc/g/X6B8Ra.png" />
      </BeerImageMask>
      <TextContainer>
        <BeerName>제주 페일 에일</BeerName>
        <BeerInfo>대한민국 · 페일 에일 · 5.5%</BeerInfo>
      </TextContainer>
    </BeerListItemContainer>
  );
};

export default BeerListItem;

const BeerListItemContainer = styled.div`
  width: 315px;
  height: 80px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  position: relative;
  display: flex;
  align-items: center;
`;

const BookmarkButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  border: 0;
  outline: none;
  background: none;
  cursor: pointer;
`;

const ColorBar = styled.div`
  width: 16px;
  height: 100%;
  background: #3e3be6;
  border-radius: 6px 0px 0px 6px;
`;

const Emoji = styled.img`
  position: absolute;
  width: 36px;
  height: 36px;
  left: -25px;
  top: 50%;
  transform: translateY(-50%);
`;

// NOTE: 마스킹 참고 : https://www.w3schools.com/css/css3_masking.asp
const BeerImageMask = styled.div`
  width: 40px;
  height: 60px;
  margin: 0 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-mask-box-image: url('https://ifh.cc/g/KQ8NLv.png');
  mask-image: url('https://ifh.cc/g/KQ8NLv.png');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
`;

const BeerImage = styled.img`
  width: 100%;
  height: auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const BeerName = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

const BeerInfo = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.8);
`;
