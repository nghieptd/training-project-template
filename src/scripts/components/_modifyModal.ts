import {
  deleteContent,
  editContent,
  getContent,
} from '../api/content';

const toggleModifyModal = (state: boolean, id?: string) => {
  const modifyModal = $('#modifyModal') as any;
  if (modifyModal) {
    modifyModal.modal(state ? 'show' : 'hide');
    if (state) {
      modifyModal.modal('show');
      modifyModal.attr('data-content-id', id);
    } else {
      modifyModal.modal('hide');
      modifyModal.removeAttr('data-content-id');
    }
  }
};
const getModifyContentId = (): string => {
  const modifyModal = document.getElementById('modifyModal');
  if (modifyModal && 'contentId' in modifyModal.dataset) {
    return modifyModal.dataset.contentId || '';
  }

  return '';
};
const setModifyModalInput = (name: string, value: string) => {
  switch (name) {
    case 'name':
      (document.getElementById(
        'contentName',
      ) as HTMLInputElement).value = value;
      break;
    case 'user':
      (document.getElementById(
        'contentModifiedBy',
      ) as HTMLInputElement).value = value;
      break;
    default:
      break;
  }
};
const getModifyModalInput = (name: string): string => {
  switch (name) {
    case 'name':
      return (document.getElementById(
        'contentName',
      ) as HTMLInputElement).value;
    case 'user':
      return (document.getElementById(
        'contentModifiedBy',
      ) as HTMLInputElement).value;
    default:
      return '';
  }
};
const clearModifyModalInputs = () => {
  setModifyModalInput('name', '');
  setModifyModalInput('user', '');
};

export const onModifyContent = async (id: string) => {
  const getContentTask = getContent(id);
  toggleModifyModal(true, id);

  const item = await getContentTask;
  if (!item) {
    toggleModifyModal(false);
    return;
  }

  setModifyModalInput('name', item.name);
  setModifyModalInput('user', item.updatedBy);
};

export const onSaveModifyContent = async () => {
  const contentName = getModifyModalInput('name');
  const contentUser = getModifyModalInput('user');

  const id = getModifyContentId();
  if (id) {
    await editContent(id, contentName, contentUser);
  }

  toggleModifyModal(false);
  clearModifyModalInputs();
  window.location.reload();
};

export const onCancelModifyContent = () => {
  toggleModifyModal(false);
  clearModifyModalInputs();
};

export const onDeleteContent = async () => {
  const id = getModifyContentId();
  if (id) {
    await deleteContent(id);
  }

  toggleModifyModal(false);
  clearModifyModalInputs();
  window.location.reload();
};
