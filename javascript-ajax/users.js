const $userList = document.querySelector('#user-list');
function usersData() {
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', handleXhr);

function handleXhr() {
  console.log(xhr.status);
  console.log(xhr.response);
  for (let i = 0; i < xhr.response.length; i++) {
    let li = document.createElement('li');
    li.textContent = xhr.response[i].name;
    $userList.appendChild(li);
  }
}
xhr.send();
}

usersData();
