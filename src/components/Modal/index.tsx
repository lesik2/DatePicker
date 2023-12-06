import closeIcon from '@assets/icons/closeModal.svg';
import {ReactElement, JSX} from 'react';

import {
  Close, Content,
  Image,
  Wrapper,
} from './styled';


export interface IModal {
  onClose: () => void;
  children: ReactElement;
}
export function Modal({ onClose, children }: IModal): JSX.Element {
  return (
      <Wrapper>
        <Content>
          {children}
          <Close data-cy="cross-close" onClick={onClose}>
            <Image className="close-img" src={closeIcon} alt="close modal window" />
          </Close>
        </Content>
      </Wrapper>
  );
}
