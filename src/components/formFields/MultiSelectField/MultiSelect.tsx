import React, { useCallback } from 'react';
import styled from '@emotion/styled';
import { isNil } from 'lodash';

import TasteBox from '@/components/commons/TasteBox';
import { SelectOption } from '@/types/select';

type ClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

type ClickEventHandler<T> = (value: T[] | undefined, event: ClickEvent) => void;

interface MultiSelectProps<T = any> {
  options: SelectOption<T>[];
  value: T[];
  maxLength?: number;
  height?: string;
  disabled?: boolean;
  onChange?: ClickEventHandler<T>;
  setError?: (errorMessage: string) => void;
  clearError?: () => void;
}

interface StyledMultiSelectProps {
  boxHeight?: string;
}

const StyledMultiSelect = styled.div<StyledMultiSelectProps>`
  position: relative;
  height: ${({ boxHeight }) => boxHeight || 'fit-content'};

  & .multi-select-list {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-y: scroll;

    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  }

  & .multi-select-item {
    margin-bottom: 16px;
  }

  &::after {
    position: absolute;
    bottom: 0px;
    left: 0;
    height: 20px;
    width: 100%;
    content: ' ';
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.color.whiteOpacity0},
      ${({ theme }) => theme.color.black100} 100%
    );
  }
`;

const MultiSelect: React.FC<MultiSelectProps> = <T extends any>({
  options,
  value,
  maxLength,
  height,
  disabled,
  onChange,
  setError,
  clearError,
}: MultiSelectProps<T>) => {
  const triggerChange = useCallback(
    (value: T[] | undefined, e: ClickEvent) => {
      if (!disabled) {
        onChange?.(value, e);
      }

      return value;
    },
    [disabled, onChange],
  );

  const handleClick = useCallback(
    (clickedValue: T, e: ClickEvent) => {
      const hasValue = !!value?.includes(clickedValue);
      const changedValue = [...(value || [])];

      if (hasValue) {
        const valueIndex = changedValue.findIndex((v) => v === value);
        changedValue.splice(valueIndex, 1);
      } else {
        if (!isNil(maxLength) && maxLength <= changedValue.length) {
          setError?.(`${maxLength}개 까지만 선택할 수 있어요 ㅜㅜ`);
          return;
        }
        changedValue.push(clickedValue);
      }
      clearError?.();
      triggerChange(changedValue, e);
    },
    [value, triggerChange, maxLength, setError, clearError],
  );

  return (
    <StyledMultiSelect boxHeight={height}>
      <div className="multi-select-list">
        {options.map((option) => (
          <TasteBox
            key={option.key}
            aria-checked={!!value?.includes(option.value)}
            type={value?.includes(option.value) ? 'primary' : 'default'}
            size="short"
            onClick={(e) => handleClick(option.value, e)}
            className="multi-select-item"
          >
            {option.label}
          </TasteBox>
        ))}
      </div>
    </StyledMultiSelect>
  );
};

export default MultiSelect;
