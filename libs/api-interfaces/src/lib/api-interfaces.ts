export interface BaseEntity {
  id: string | null;
}
export interface Cell extends BaseEntity {
  title: string;
  description: string;
  uri: string;
  module: string;
  routePath: string;
  published: boolean;
  healthy: boolean;
}

export type Microfrontend = LoadRemoteModuleOptions & {
  displayName: string;
  routePath: string;
  ngModuleName: string;
};

export type LoadRemoteModuleOptions = {
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
};