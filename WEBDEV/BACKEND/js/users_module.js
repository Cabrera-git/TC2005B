class users
{
    constructor(name, surname, email)
    {
        this.name = name
        this.surname = surname
        this.email = email
    }

    getInfo()
    {
        return `Name: ${this.name} ${this.surname} Email: ${this.email}`
    }

    printName()
    {
        console.log(`Name: ${this.name} ${this.surname} Email: ${this.email}`)
    }
}

export default users