export interface Node {
  id: number;
  name: string;
  folderId: number;
  isFolder: boolean;

  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}
