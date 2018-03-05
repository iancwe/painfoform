$(document).ready(function () {
  console.log('jQuery up and running')
  // prefill in form with url anchor
  var hashParams = window.location.hash.substr(1).split('&')
  for (var i = 0; i < hashParams.length; i++) {
    var fieldsValue = hashParams[i].split('=')
    if (fieldsValue[0] === 'first_name') {
      document.getElementById('entry_334896794').value = decodeURIComponent(fieldsValue[1])
    } else if (fieldsValue[0] === 'last_name') {
      document.getElementById('entry_894202027').value = decodeURIComponent(fieldsValue[1])
    } else if (fieldsValue[0] === 'email') {
      document.getElementById('entry_1302158345').value = decodeURIComponent(fieldsValue[1])
    }
  }
  // Sending API call to myinfo to test tutorial 1
  axios({
    method: 'get',
    url: 'https://myinfo.api.gov.sg/dev/L0/v1/person/S9203266C/',
    responseType: 'json',
    crossDomain: true
  })
  .then((response) => {
    console.log(response)
    return response
  })
  .catch((error) => {
    console.log(error)
  })
})
