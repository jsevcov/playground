function showData() {
    alert('funguju')
}

$.getJSON('https://api.github.com/users/daq90', function(data) {
    document.getElementById('datashow').innerHTML = data.login
});

