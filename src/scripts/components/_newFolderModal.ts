import { v4 as uuid } from 'uuid';

import { createContent } from '../api/content';

const toggleNewFolderModal = (state: boolean) => {
  const newFolderModal = $('#newFolderModal') as any;
  if (newFolderModal) {
    newFolderModal.modal(state ? 'show' : 'hide');
  }
};
const getNewFolderModalInput = (name: string): string => {
  switch (name) {
    case 'name':
      return (document.getElementById(
        'folderName',
      ) as HTMLInputElement).value;
    case 'user':
      return (document.getElementById(
        'folderUser',
      ) as HTMLInputElement).value;
    default:
      return '';
  }
};
const setNewFolderModalInput = (name: string, value: string) => {
  switch (name) {
    case 'name':
      (document.getElementById(
        'folderName',
      ) as HTMLInputElement).value = value;
      break;
    case 'user':
      (document.getElementById(
        'folderUser',
      ) as HTMLInputElement).value = value;
      break;
    default:
      break;
  }
};
const clearNewFolderModalInput = () => {
  setNewFolderModalInput('name', '');
  setNewFolderModalInput('user', '');
};

export const onNewFolder = () => {
  toggleNewFolderModal(true);
};

export const onSaveNewFolder = async () => {
  const folderName = getNewFolderModalInput('name');
  const folderUser = getNewFolderModalInput('user');

  const timestamp = new Date();
  await createContent({
    id: uuid(),
    name: folderName,
    isFolder: true,
    folderId: null,

    createdBy: folderUser,
    updatedBy: folderUser,
    createdAt: timestamp,
    updatedAt: timestamp,
  });

  toggleNewFolderModal(false);
  clearNewFolderModalInput();
  window.location.reload();
};
