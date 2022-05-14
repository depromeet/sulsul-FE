import React, { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import cx from 'classnames';

type SwitchEvent = React.MouseEvent<HTMLButtonElement>;

type SwitchChangeEventHandler = (checked: boolean, event: SwitchEvent) => void;

type SwitchClickEventHandler = SwitchChangeEventHandler;

interface SwitchProps {
  defaultValue?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: SwitchClickEventHandler;
  onChange?: SwitchChangeEventHandler;
}

const StyledSwitch = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 12px;
  padding-left: 6px;
  width: 66px;
  height: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.color.whiteOpacity35};
  transition: background 0.3s;

  & > .switch-handle {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.white};
    transition: transform 0.3s;
  }

  & > .switch-title {
    color: ${({ theme }) => theme.color.white};
    font-weight: 700;
    font-size: 12px;
    transition: transform 0.3s;
  }

  &[aria-checked='true'] {
    background-color: ${({ theme }) => theme.semanticColor.primary};

    & > .switch-handle {
      transform: translateX(34px);
    }

    & > .switch-title {
      transform: translateX(-24px);
    }
  }
`;

const CHECKED_TITLE = 'ON';
const UNCHECKED_TITLE = 'OFF';

const Switch: React.FC<SwitchProps> = ({
  defaultValue,
  disabled,
  className,
  onClick,
  onChange,
}) => {
  const [checked, setChecked] = useState(defaultValue || false);

  const triggerChange = useCallback(
    (value: boolean, event: SwitchEvent) => {
      if (!disabled) {
        setChecked(value);
        onChange?.(value, event);
      }

      return checked;
    },
    [checked, disabled, onChange],
  );

  const handleClick = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      const _checked = triggerChange(!checked, e);
      onClick?.(_checked, e);
    },
    [checked, onClick, triggerChange],
  );

  return (
    <StyledSwitch
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={handleClick}
      disabled={disabled}
      className={cx([className])}
    >
      <span className="switch-handle" />
      <span className="switch-title">{checked ? CHECKED_TITLE : UNCHECKED_TITLE}</span>
    </StyledSwitch>
  );
};

export default Switch;
