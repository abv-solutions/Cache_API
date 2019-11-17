userList = document.querySelector('#users');

// Fetch info
const getUsers = async () => {
  let users;
  //f Check for Cached data inside LocalStorage
  if (localStorage.getItem('users') !== null) {
    users = JSON.parse(localStorage.getItem('users'));
    console.log('Fetched data from Cache');
  } else {
    const res = await fetch('https://api.github.com/users');
    users = await res.json();
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Fetched data from API');
  }

  users.slice(0, 10).forEach(user => {
    const li = document.createElement('li');
    li.className = 'list-group-item bg-dark border';
    const link = document.createElement('a');
    link.appendChild(document.createTextNode(user.login));
    link.href = user.html_url;
    link.target = '_blank';
    li.appendChild(link);
    userList.appendChild(li);
  });
};

getUsers();
