const bcrypt = require('bcrypt')

const password = 'carlos123';

const hash = bcrypt.hash(password, 10)

const hashPassword = async() =>{
    const password = '14deagosto';
    const hash = await bcrypt.hash(password, 10)
    console.log(hash)
}

const verifyPassword=async()=> {
    const password = '14deagosto'
    const hash = '$2b$10$RMSxJva/aOzAYkRe5mY8kurfdQm2yD9iRojADK00De6uqazlFXEX6'
    const verify = await bcrypt.compare(password, hash)
    console.log(verify)
}

hashPassword()
verifyPassword()