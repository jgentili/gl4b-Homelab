// Table search filter
document.addEventListener('DOMContentLoaded', () => {
  const searchInputs = document.querySelectorAll('[data-table-filter]');
  searchInputs.forEach(input => {
    const tableId = input.getAttribute('data-table-filter');
    const table = document.getElementById(tableId);
    if (!table) return;

    input.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const rows = table.querySelectorAll('tbody tr');
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(term) ? '' : 'none';
      });
    });
  });
});
