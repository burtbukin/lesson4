const ages = [10, 18, 55, 3, 20];

const checkAccess = (age) => {
    if(age >= 18){
        return `Возраст ${age}: доступ разрешен`
    } else {
        return `Возраст ${age}: доступ запрещен`
    }
}

for (const age of ages){
    console.log(checkAccess(age))
}

