import datepicker from 'js-datepicker';
import 'js-datepicker/dist/datepicker.min.css';

document.addEventListener('DOMContentLoaded', (event) => {
  const pickerFirst = datepicker('#pickfirst', {
    showAllDates: true,
    customDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    formatter: (input, date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();

      input.value = `${day}_${month}_${year}`;
    },
  });

  const pickerSecond = datepicker('#pick', {
    customDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    showAllDates: true,
    dateSelected: new Date(2016, 7, 9),
    formatter: (input, date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();

      input.value = `${day}_${month}_${year}`;
    },
  });

  const listButton = document.getElementById('listButton');
  console.log('l', listButton);
  listButton.addEventListener('click', () => {
    console.log('listButon clicked');

    if (listButton.classList.contains('clickable')) {
      listButton.classList.remove('clickable');
      gridButton.classList.add('clickable');
    } else {
      return;
    }
  });

  const gridButton = document.getElementById('gridButton');
  gridButton.addEventListener('click', () => {
    if (gridButton.classList.contains('clickable')) {
      gridButton.classList.remove('clickable');
      listButton.classList.add('clickable');
    } else {
      return;
    }
  });
});
