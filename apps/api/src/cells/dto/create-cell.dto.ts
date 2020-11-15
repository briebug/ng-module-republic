export class CreateCellDto {
  id: string;
  title: string;
  description: string;
  module: string;
  componentName: string;
  remoteName: string;
  uri: string;
  healthy: boolean;
  published: boolean;
  version: string;
  visible: boolean;
}
