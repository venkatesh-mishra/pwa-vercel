import React from 'react';

export interface QueryParams {
  request_origin?: string;
  redirect_uri?: string;
  web_view?: string;
  client_id?: string;
  mobile?: string | boolean;
}

export interface _AppProps {
  children: React.ReactNode;
  publicPath: string;
  queryParams: QueryParams;
  globalConfig: any;
}
