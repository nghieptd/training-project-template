import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';

import ready from '../utilities/_helper';
import renderTable from '../components/_table';
import bindNavbarEvents from '../components/_navbar';

ready(() => {
  renderTable();
  bindNavbarEvents();
});
