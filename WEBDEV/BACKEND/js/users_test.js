import users from './users_module.js'

const user1 = new users('Emiliano', 'Cabrera', 'a01025453@itesm.mx')

user1.printName()

const p = document.getElementById('par')
p.innerHTML = user1.getInfo()