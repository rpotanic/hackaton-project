export const companies = [
    {
        name: 'intel',
        id: 1,
        address: '',
        inn: '',
        kpp: '',
        email: '',
        phone: '',
        workersRent: [{}, {}, {}],
        workersSale: [{}, {}, {}],
        vacansies: [{}, {}, {}, {}]
    },
    {
        name: 'netcracker',
        id: 2,
        address: '',
        inn: '',
        kpp: '',
        email: '',
        phone: '',
        workersRent: [{}, {}, {}],
        workersSale: [{}, {}, {}],
        vacansies: [{}, {}, {}, {}]
    },
    {
        name: 'mtc',
        id: 3,
        address: '',
        inn: '',
        kpp: '',
        email: '',
        phone: '',
        workersRent: [{}, {}, {}],
        workersSale: [{}, {}, {}],
        vacansies: [{}, {}, {}, {}]
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
        vacansies: [{}, {}, {}, {}]
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
