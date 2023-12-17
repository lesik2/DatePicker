import { Component, ErrorInfo, ReactNode } from 'react';
import errorIcon from '@assets/icons/error.svg';

import {
  Error, ErrorMessage, Image, Wrapper,
} from './styled';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
    message: string,
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      message: '',
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error.message };
  }

  public override componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Uncaught error:', error, errorInfo);
  }

  public override render(): ReactNode {
    const { hasError, message } = this.state;
    const { children } = this.props;
    if (hasError) {
      return (
        <Wrapper>
          <Image src={errorIcon} alt="error" />
          <Error>There was an error</Error>
          <ErrorMessage>{message}</ErrorMessage>
        </Wrapper>
      );
    }

    return children;
  }
}
