import { Node as ContentNode } from '../models/node';
import { File as ContentFile } from '../models/file';
import { loadContents } from '../api/content';

const formatTime = (date: Date): string => {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(date.getTime())) {
    return 'Invalid date';
  }

  const current = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let strTime = `${monthNames[date.getMonth()]} ${date.getDate()}`;
  // Default - return month and date only
  // Show elapsed time if within a day
  if (date.getDate() === current.getDate()) {
    const msDiff = current.getTime() - date.getTime();
    const elapsedSec = Math.floor(msDiff / 1000);

    if (elapsedSec < 10) {
      strTime = 'A few seconds ago';
    } else if (elapsedSec < 60) {
      strTime = `${elapsedSec} seconds ago`;
    } else if (elapsedSec < 3600) {
      strTime = `${Math.floor(elapsedSec / 60)} minutes ago`;
    } else if (elapsedSec < 86400) {
      strTime = `${Math.floor(elapsedSec / 3600)} hours ago`;
    }
  }

  return strTime;
};

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

const buildTableRow = (data: ContentNode | ContentFile): Element => {
  const tr = document.createElement('tr');

  const type = document.createElement('td');
  type.className = 'typeCell';
  const icon = document.createElement('i');
  icon.className = getTypeClasses(
    'type' in data ? data.type : 'folder',
  );
  type.appendChild(icon);

  const name = document.createElement('td');
  name.innerText = data.name;

  const modifiedDate = document.createElement('td');
  modifiedDate.className = 'modifiedCell';
  modifiedDate.innerText = formatTime(data.updatedAt);

  const modifiedBy = document.createElement('td');
  modifiedBy.className = 'modByCell';
  modifiedBy.innerText = data.updatedBy;

  tr.append(
    type,
    name,
    modifiedDate,
    modifiedBy,
    document.createElement('td'),
  );
  return tr;
};

const renderTable = async () => {
  // TODO Render table data
  const tbodyDesktop = document.querySelector('#table-desktop tbody');
  if (tbodyDesktop === null) {
    return;
  }

  const data = await loadContents();
  const nodes = data.map(buildTableRow);

  tbodyDesktop.append(...nodes);
};

export default renderTable;
