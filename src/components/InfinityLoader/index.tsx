import {JSX} from 'react';
import { IColor } from '@customTypes/index';

import { Loader } from './styled';

export interface IInfinityLoader{
  color: IColor;
}
export function InfinityLoader({color}: IInfinityLoader): JSX.Element {
  return <Loader data-cy="infinity-loader" data-testid="infinity-loader" $color={color}/>;
}

export { Loader };
