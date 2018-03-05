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
      var nationality = details.nationality.value
      document.getElementById('entry_845436144').value = nationality
      var marital = details.marital.value
      document.getElementById('entry_1666814391').value = marital
      var dob = details.dob.value
      document.getElementById('entry_1628080810').value = dob
      var nric = 'S9203266C'
      document.getElementById('entry_1172287282').value = nric
      var gender = details.sex.value
      // figuring out how to prefill radio buttons
      var address1 = details.regadd.block + ' ' + details.regadd.street
      document.getElementById('entry_303748046').value = address1
      var address2 = '#' + details.regadd.floor + '-' + details.regadd.unit
      document.getElementById('entry_1490315281').value = address2
      var postal = details.regadd.postal
      document.getElementById('entry_1781395245').value = postal
      var income = details.assessableincome.value
      document.getElementById('entry_1306415138').value = income
    },
    error: function (error) {
      console.log('ERROR', error)
    }
  })
})
