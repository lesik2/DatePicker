import { IInfinityLoader } from '@customTypes/index';

import { Loader } from './styled';

export function InfinityLoader({color}: IInfinityLoader) {
  return <Loader data-testid="infinity-loader" $color={color}/>;
}

export { Loader };
