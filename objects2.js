const user = {
    name: 'John',
    birthday: new Date(1990, 1, 1),
    age: 30
}

const user2 = {
    name: 'John',
    birthday: new Date(1990, 1, 1),
    get age() {
        return new Date().getFullYear() - this.birthday.getFullYear()
    }
}

console.log(user2.age)