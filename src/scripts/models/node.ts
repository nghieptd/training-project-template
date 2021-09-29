export interface Node {
  id: string;
  name: string;
  folderId: string | null;
  isFolder: boolean;

  createdAt: Date;
  createdBy: string;
  updatedAt: Date;
  updatedBy: string;
}
