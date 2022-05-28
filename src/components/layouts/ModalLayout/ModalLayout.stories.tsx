import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from '@emotion/styled';

import Button from '../../commons/Button';
import ModalLayout from './ModalLayout';

export default {
  title: 'Components/layouts/ModalLayout',
  component: ModalLayout,
} as ComponentMeta<typeof ModalLayout>;

const StyledWrapper = styled.div<{ open: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  width: 60%;

  padding: 1.6rem;
  border-radius: 1.6rem;

  background-color: ${(p) => p.theme.color.white};

  ${(p) => !p.open && `display:none;`}

  > p {
    height: 3rem;
  }
`;

const Template: ComponentStory<typeof ModalLayout> = (args) => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <ModalLayout open={open} onClose={closeModal}>
        <StyledWrapper open={open}>
          <p>모달</p>
          <button onClick={closeModal}>취소</button>
          <button onClick={closeModal}>확인</button>
        </StyledWrapper>
      </ModalLayout>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
