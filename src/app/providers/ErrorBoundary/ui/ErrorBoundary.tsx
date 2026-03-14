import { ErrorPage } from "pages/ErrorPage";
import React, { ErrorInfo, PropsWithChildren, Suspense } from "react";

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <Suspense fallback="">
          <ErrorPage />
        </Suspense>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
