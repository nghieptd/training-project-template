const getTypeClasses = (type: string): string => {
  const prefix = 'ms-Icon ms-Icon--';
  switch (type) {
    case 'folder':
      return `${prefix}FabricFolderFill`;
    case 'xlsx':
      return `${prefix}ExcelDocument excelType`;
    default:
      return `${prefix}SurveyQuestions`;
  }
};

const buildTableRow = (): Element => {
  const tr = document.createElement('tr');

  const type = document.createElement('td');
  type.className = 'typeCell';
  const icon = document.createElement('i');
  icon.className = getTypeClasses('folder');
  type.appendChild(icon);

  const name = document.createElement('td');
  name.innerText = 'CAS';

  const modifiedDate = document.createElement('td');
  modifiedDate.className = 'modifiedCell';
  modifiedDate.innerText = 'April 30';

  const modifiedBy = document.createElement('td');
  modifiedBy.className = 'modByCell';
  modifiedBy.innerText = 'Administrator MOD';

  tr.append(
    type,
    name,
    modifiedDate,
    modifiedBy,
    document.createElement('td'),
  );
  return tr;
};

const renderTable = () => {
  // TODO Render table data
  const tbodyDesktop = document.querySelector('#table-desktop tbody');
  if (tbodyDesktop === null) {
    return;
  }

  tbodyDesktop.appendChild(buildTableRow());
};

export default renderTable;
