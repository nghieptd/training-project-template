import { v4 as uuid } from 'uuid';
import { createContent } from '../api/content';

const toggleNewFileModal = (state: boolean) => {
  const newModal: any = $('#newFileModal');
  if (newModal) {
    newModal.modal(state ? 'show' : 'hide');
  }
};

const setNewFileModalInput = (name: string, value: string) => {
  switch (name) {
    case 'name':
      (document.getElementById(
        'fileName',
      ) as HTMLInputElement).value = value;
      break;
    case 'type':
      (document.getElementById(
        'fileType',
      ) as HTMLInputElement).value = value;
      break;
    case 'user':
      (document.getElementById(
        'fileUser',
      ) as HTMLInputElement).value = value;
      break;
    default:
      break;
  }
};
const getNewFileModalInput = (name: string): string => {
  switch (name) {
    case 'name':
      return (document.getElementById('fileName') as HTMLInputElement)
        .value;
    case 'type':
      return (document.getElementById('fileType') as HTMLInputElement)
        .value;
    case 'user':
      return (document.getElementById('fileUser') as HTMLInputElement)
        .value;
    default:
      return '';
  }
};

const clearNewModalInputs = () => {
  setNewFileModalInput('name', '');
  setNewFileModalInput('type', '');
  setNewFileModalInput('user', '');
};

export const onNewFile = () => {
  toggleNewFileModal(true);
};
export const onSaveNewFile = async () => {
  const fileName = getNewFileModalInput('name');
  const fileType = getNewFileModalInput('type');
  const fileUser = getNewFileModalInput('user');

  const timestamp = new Date();
  await createContent({
    id: uuid(),
    name: fileName,
    type: fileType,
    isFolder: false,
    folderId: null,

    createdBy: fileUser,
    updatedBy: fileUser,
    createdAt: timestamp,
    updatedAt: timestamp,
  });

  toggleNewFileModal(false);
  clearNewModalInputs();

  window.location.reload();
};
