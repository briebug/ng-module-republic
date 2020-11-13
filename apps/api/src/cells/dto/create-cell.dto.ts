export class CreateCellDto {
  id: string;
  title: string;
  description: string;
  module: string;
  routePath: string;
  uri: string;
  healthy: boolean;
  published: boolean;
}
