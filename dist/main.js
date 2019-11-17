userList = document.querySelector('#users');

// Fetch info from getusers Lambda Function
const getUsers = async () => {
  const res = await fetch('https://api.github.com/users');
  console.log('Fetched data from API');
  const users = await res.json();
  users.slice(0, 10).forEach(user => {
    const li = document.createElement('li');
    li.className = 'list-group-item bg-dark';
    const link = document.createElement('a');
    link.appendChild(document.createTextNode(user.login));
    link.href = user.html_url;
    link.target = '_blank';
    li.appendChild(link);
    userList.appendChild(li);
  });
};

getUsers();
