let from = 0;
let to = 5;

function showData() {
  $.getJSON('https://api.github.com/users?since=10', users => {
    console.log(users);
    console.log(users.length);

    document.getElementById('datashow').innerHTML = users.slice(from, to).map(user => {
      return `
        <p class="mt-4"><img src=${user.avatar_url}/>
        <p><a href=/user.html?user=${user.login}>${user.login}</a>
        `;
    });
  });
}

function userDetail() {
  let userUrl = document.location.href;
  let userName = userUrl.split("?user=");
  console.log(userName[1]);
  $.getJSON('https://api.github.com/users/' + (userName[1]), userDetail => {
    console.log(userDetail);
    document.getElementById('userAllData').innerHTML = `
        <p><img src=${userDetail.avatar_url}/>
        <p>user name: ${userDetail.name}
        <p>user email: ${userDetail.email}
        <p>user location: ${userDetail.location}
        <p>user followers: ${userDetail.followers}
        <p>user following: ${userDetail.following}
        <p>user since: ${userDetail.created_at}
        <p>user company: ${userDetail.company}
        <p>user blog: ${userDetail.blog}
        `;
  });
}

function pagination() {

}

function nextStep() {
  from += 5;
  to += 5;
  showData();
}

function previousStep() {
  if (from === 0 && to === 5) {
    alert("there is no more previous steps")
  } else {
    from -= 5;
    to -= 5;
    showData();
  }
}
