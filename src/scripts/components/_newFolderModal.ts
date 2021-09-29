const toggleNewFolderModal = (state: boolean) => {
  const newFolderModal = $('#newFolderModal') as any;
  if (newFolderModal) {
    newFolderModal.modal(state ? 'show' : 'hide');
  }
};

export const onNewFolder = () => {
  toggleNewFolderModal(true);
};

export const onSaveNewFolder = () => {
  toggleNewFolderModal(false);
};
