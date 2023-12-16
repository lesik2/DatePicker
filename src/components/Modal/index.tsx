import closeIcon from '@assets/icons/closeModal.svg';
import {JSX} from 'react';
import { IModal } from '@customTypes/modal';

import {
  Close, Content,
  Image,
  Wrapper,
} from './styled';


export function Modal({ onClose, children }: IModal): JSX.Element {
  return (
      <Wrapper data-testid='modal'>
        <Content>
          {children}
          <Close data-testid="modal-close" onClick={onClose}>
            <Image className="close-img" src={closeIcon} alt="close modal window" />
          </Close>
        </Content>
      </Wrapper>
  );
}
