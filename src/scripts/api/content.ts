import randomSleep from '../utilities/_randomSleep';
import data from './data';
import { Node } from '../models/node';

export const loadContents = async (
  folder?: string,
): Promise<Array<Node>> => {
  await randomSleep();

  let fetchedItems: any[] = [];
  if (!folder) {
    fetchedItems = data.filter(item => item.folderId < 0);
  } else {
    const targetFolder = data.find(item => item.name === folder);
    if (targetFolder) {
      fetchedItems = data.filter(
        item =>
          item.folderId > -1 && item.folderId === targetFolder.id,
      );
    }
  }

  return fetchedItems.map(item => {
    if (!item.isFolder) {
      /* File */
      return {
        id: item.id,
        name: item.name,
        isFolder: item.isFolder,
        folderId: item.folderId,
        type: item.type,

        createdAt: item.createdAt,
        createdBy: item.createdBy,
        updatedAt: item.updatedAt,
        updatedBy: item.updatedBy,
      };
    }

    /* Node */
    return {
      id: item.id,
      name: item.name,
      isFolder: item.isFolder,
      folderId: item.folderId,

      createdAt: item.createdAt,
      createdBy: item.createdBy,
      updatedAt: item.updatedAt,
      updatedBy: item.updatedBy,
    };
  });
};

export const editContent = () => {
  // TODO
};

export const deleteFile = () => {
  // TODO
};

export const createFile = () => {
  // TODO
};
