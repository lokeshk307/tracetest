import {external} from './Generated.types';

export interface IEnv {
  analyticsEnabled: boolean;
  appVersion: string;
  demoEnabled: string[];
  demoEndpoints: {[key: string]: string};
  env: string;
  experimentalFeatures: string[];
  measurementId: string;
  serverID: string;
  serverPathPrefix: string;
}

export type Modify<T, R> = Omit<T, keyof R> & R;

export interface IMockFactory<T, R> {
  (): {
    raw(data?: Partial<R>): R;
    model(data?: Partial<R>): T;
  };
}

export type THttpSchemas = external['http.yaml']['components']['schemas'];
export type TTraceSchemas = external['trace.yaml']['components']['schemas'];
export type TTestSchemas = external['tests.yaml']['components']['schemas'];
export type TTriggerSchemas = external['triggers.yaml']['components']['schemas'];
export type TGrpcSchemas = external['grpc.yaml']['components']['schemas'];
export type TEnvironmentSchemas = external['environments.yaml']['components']['schemas'];
export type TExpressionsSchemas = external['expressions.yaml']['components']['schemas'];
export type TTransactionsSchemas = external['transactions.yaml']['components']['schemas'];
export type TResourceSchemas = external['resources.yaml']['components']['schemas'];

export type TSelector = TTestSchemas['Selector'];

export type Model<T, R> = Modify<Required<T>, R>;

export interface IAnalytics {
  identify(traits: Record<string, any>): void;
  track(event: string, traits: Record<string, any>): void;
  page(pageName: string, traits: Record<string, any>): void;
}
