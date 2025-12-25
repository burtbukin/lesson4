// Мини-задание на проверку возраста с лекции
const users = [
    {name: "Alex", age: 16 },
    {name: "Ivan", age: 21 }
]

const ageChecker = (user) => {
    if (user.age >= 18) {
        console.log(`${user.name}: Совершеннолетний`)
    }

    else {
        console.log(`${user.name}: Несовершеннолетний`)
    }
}

for (const user of users) {
    ageChecker(user)
}


// Конвертер валют




// Фмльтр взрослых