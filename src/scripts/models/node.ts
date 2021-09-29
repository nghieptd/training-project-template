export interface Node {
  id: string;
  name: string;
  folderId: string;
  isFolder: boolean;

  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}
