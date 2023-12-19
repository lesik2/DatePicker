import {ITooltip} from '@customTypes/index'

import { Wrapper, Text } from './styled';
import { useShowTooltip } from './hooks/useShowTooltip';

export function Tooltip({message, isOpen, setIsOpen}: ITooltip) {
  useShowTooltip(isOpen, setIsOpen);

  return (
    <Wrapper data-testid='tooltip' $isOpen={isOpen}>
      <Text>
        {message}
      </Text>
    </Wrapper>
  )
}
