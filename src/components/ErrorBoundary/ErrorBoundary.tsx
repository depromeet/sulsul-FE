import React from 'react';

interface Props {
  fallback: React.ReactNode;
  onError?: (error: Error) => void;
}

interface State {
  error?: Error;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {};

  public componentDidCatch(error: Error) {
    this.props.onError?.(error);
    this.setState({
      error,
    });
  }

  public render() {
    const { error } = this.state;
    const { fallback } = this.props;

    if (error) {
      return <>{fallback}</>;
    }

    return this.props.children;
  }
}
