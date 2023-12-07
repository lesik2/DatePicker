import { useState, useEffect, ReactElement, ReactPortal } from 'react';
import ReactDOM from 'react-dom';

export interface IPortal {
  children: ReactElement;
}
export const Portal = ({ children }: IPortal): ReactPortal => {
  const [modalContainer] = useState(document.createElement('div'));
  useEffect(() => {
    let modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      const tempEl = document.createElement('div');
      tempEl.id = 'modal-root';
      document.body.append(tempEl);
      modalRoot = tempEl;
    }

    modalRoot.appendChild(modalContainer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(children, modalContainer);
};
