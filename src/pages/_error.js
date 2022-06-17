import NextErrorComponent from 'next/error';
import { captureException, flush } from '@sentry/nextjs';

const AppError = ({ statusCode, hasGetInitialPropsRun, err }) => {
  if (!hasGetInitialPropsRun && err) {
    // getInitialProps is not called in case of
    // https://github.com/vercel/next.js/issues/8592. As a workaround, we pass
    // err via _app.js so it can be captured
    captureException(err);
    // Flushing is not required in this case as it only happens on the client
  }

  return <NextErrorComponent statusCode={statusCode} />;
};

AppError.getInitialProps = async (context) => {
  const errorInitialProps = await NextErrorComponent.getInitialProps(context);

  const { res, err, asPath } = context;

  errorInitialProps.hasGetInitialPropsRun = true;

  if (res?.statusCode === 404) {
    return errorInitialProps;
  }

  if (err) {
    captureException(err);

    await flush(2000);

    return errorInitialProps;
  }

  captureException(new Error(`_error.js getInitialProps missing data at path: ${asPath}`));
  await flush(2000);

  return errorInitialProps;
};

export default AppError;
