import { NextPageContext, GetServerSidePropsContext } from 'next';

const NON_AUTH_HEADER = 'not-logged-in';

export const setAuthHeader = (ctx: NextPageContext) => {
  if (ctx.req) {
    ctx.req.headers[NON_AUTH_HEADER] = 'true';
  }
};

export const hasAuthHeader = (ctx: NextPageContext | GetServerSidePropsContext) => {
  return ctx.req?.headers[NON_AUTH_HEADER] !== 'true';
};
