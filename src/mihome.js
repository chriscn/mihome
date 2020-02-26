const p = require('phin')

async function helloWorld() {
  const res = await p({
    url: 'https://mihome4u.co.uk/api/v1/users/profile',
    method: 'GET',
    param: {
      'username': 'mark.nethercott@gmail.com',
      'password': 'QkXZ8YdaPw6s7QifY7^@8h2pAHL6m3{#Mx9UQkLebt8.Nt(oJUub{veEd[+ieC(Q'
    },
    'parse': 'json'
  })
  console.log(res.body)
}

helloWorld()
