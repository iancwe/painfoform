$(document).ready(function () {
  //global variables
  var details=[]

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
  $.ajax({
    type: 'GET',
    url: 'https://myinfo.api.gov.sg/dev/L0/v1/person/S9203266C/',
    datatype: 'json',
    success: function (details) {
      console.log('Success', details)
    },
    error: function (error) {
      console.log('ERROR', error)
    }
  })
})
