import {ReactElement, Dispatch} from 'react';

import { INote, ISize } from './models';


export interface IModal {
  onClose: () => void;
  children: ReactElement;
}

export interface IModalNotes{
  notes: INote[];
  setNotes: Dispatch<React.SetStateAction<INote[]>>;
  date: Date;
  size: ISize;
}