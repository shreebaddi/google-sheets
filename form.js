var scriptURL =""
var form = document.forms['google-sheet']

form.addEventListener('submit', e=>{
e.preventDefault()
fetch(scriptURL,{method: 'POST', body: new FormData(form)})
.then(response => document.getElementById('form_alert').innerHTML = "Data has stored")
.catch(error => document.getElementById('form_alert').innerHTML = "Data has not stored")
})


