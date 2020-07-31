import users from './users.js'

const tableContainer = document.querySelector('.table__container');
const rowTemplate = document.querySelector('#row').content;

function renderTable() {
    users.forEach((user) => {
        const rowElement = rowTemplate.cloneNode(true);
    
        rowElement.querySelector('.id').textContent = user.id;
        rowElement.querySelector('.name').textContent = user.first_name;
        rowElement.querySelector('.surname').textContent = user.last_name;
        rowElement.querySelector('.email').textContent = user.email;
        rowElement.querySelector('.avatar').src = user.avatar;
    
        tableContainer.appendChild(rowElement);
    });
}

renderTable();
