export const companies = [
    {
        name: 'intel',
        id: 1,
        address: '',
        inn: '',
        kpp: '',
        email: '',
        phone: '',
        workersRent:[
            {
                id: '',
                firstname: '',
                lastname: '',
                middlename: '',
                special: 'Программист',
                experience: '2',
                salaryExp: '50000',
                city: 'Нижний Новгород',
                competence: ['ReactJS', 'C++'],
                count: '1'
            },
        ],
        workersSale: [
            {
                id: '',
                firstname: '',
                lastname: '',
                middlename: '',
                special: 'Программист',
                experience: '5',
                salaryExp: '50000',
                city: 'Нижний Новгород',
                competence: ['ReactJS', 'C++'],
                count: '1'
            },
        ],
        vacansies: [{
            id: '',
            name: 'Программист',
            companyId: '',
            salaryFrom: '30000',
            salaryTo: '50000',
            experience: '6',
            competence: ['ReactJS', 'C++'],
            type: '',
            city: 'Нижний Новгород',
            count: 1
        }]
    },
    {
        name: 'netcracker',
        id: 2,
        address: '',
        inn: '',
        kpp: '',
        email: '',
        phone: '',
        workersRent: [ {
            id: '',
            firstname: '',
            lastname: '',
            middlename: '',
            special: 'Программист',
            experience: '2',
            salaryExp: '50000',
            city: 'Нижний Новгород',
            competence: ['ReactJS', 'C++'],
            count: '1'
        }],
        workersSale: [{}, {}, {}],
        vacansies: [{
            id: '',
            name: 'Программист',
            companyId: '',
            salaryFrom: '10000',
            salaryTo: '50000',
            experience: '3',
            count: 1,
            competence: ['ReactJS', 'C++'],
            type: '',
            city: 'Нижний Новгород',
        }]
    },
    {
        name: 'mtc',
        id: 3,
        address: '',
        inn: '',
        kpp: '',
        email: '',
        phone: '',
        workersRent: [ {
            id: '',
            firstname: '',
            lastname: '',
            middlename: '',
            special: 'Системный администратор',
            experience: '3',
            salaryExp: '50000',
            count: 5,
            city: 'Нижний Новгород',
            competence: ['Теория сетей', 'Протоколы передачи', ''],
            count: '1'
        }],
        workersSale: [{}, {}, {}],
        vacansies: [{
            id: '',
            name: 'Бухгалтер',
            companyId: '',
            salaryFrom: '30000',
            salaryTo: '50000',
            competence: ['1С', '2-НДФЛ'],
            experience: '4',
            count: 1,
            type: '',
            city: 'Нижний Новгород',
        }]
    },
    {
        name: 'beeline',
        id: 4,
        address: '',
        inn: '',
        kpp: '',
        email: '',
        phone: '',
        workersRent: [{}, {}, {}],
        workersSale: [{}, {}, {}],
        vacansies: [{
            id: '',
            name: 'Администратор',
            companyId: '',
            salaryFrom: '50000',
            salaryTo: '70000',
            competence: ['1С', '2-НДФЛ'],
            experience: '5',
            count: 7,
            type: '',
            city: '',
        }]
    }
]

export const workers = [
    {
        name: 'Программист',
        price: '50000',
        count: '6'
    },
    {
        name: 'Бухгалтер',
        price: '60000',
        count: '7'
    },
    {
        name: 'Заправщик',
        price: '40000',
        count: '8'
    },
]

export const employee = [{
    id: '',
    firstname: '',
    lastname: '',
    middlename: '',
    city: '',
}]

export const competence = [{
    id: '',
    name: '',
    desc: '',
}]

export const vacancy = [{
    id: '',
    name: '',
    companyId: '',
    salaryFrom: '',
    salaryTo: '',
    experience: '',
    type: '',
    city: '',
}]

export const team = [{
    id: '',
    name: '',
}]

export const teamEmp = [{
    teamId: '',
    empId: '',
}]

export const empCompet = [{
    empId: '',
    compId: '',
    experience: '',
    salaryExp: '',
}]

export const vacCompet = [{
    vacId: '',
    compId: '',
}]

export const deals = [{
    vacId: '',
    empId: '',
    dealDate: '',
}]
