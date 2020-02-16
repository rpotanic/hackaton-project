/* заливаем компании */
insert into company(company_name, address, inn, kpp, email, phone) values('АО Интел', '121614, город Москва, Крылатская улица, 17-4', '7731030797', '773101001', 'info@intel.ru', '(408) 765-8080 ');
insert into company(company_name, address, inn, kpp, email, phone) values('ПАО МТС', '109147, город Москва, Марксистская улица, 4', '7740000076', '770901001', 'info@mts.ru', '+7 495 7660166');
insert into company(company_name, address, inn, kpp, email, phone) values('ООО НЕТКРЭКЕР', '115114, город Москва, Кожевническая улица, дом 7 строение 1, этаж 3 31', '7713511177', '770501001', 'info@netcracker.com', '1-781-419-3300');
insert into company(company_name, address, inn, kpp, email, phone) values('ПАО ВымпелКом', '127083, г. Москва, ул. Восьмого Марта, дом 10, строение 14', '7713076301', '997750001', 'info@beeline.ru', '7 495 7972727');
insert into company(company_name, address, inn, kpp, email, phone) values('ООО Рога и Копыта', '141401, М.о., Химки, Проспект Мира, 3', '5040000076', '500901001', 'info@randg.ru', '+74956664433');
commit;

/* заливаем сотрудников */
insert into employee(first_name, last_name, middle_name, city) values('Иван', 'Иванов', 'Иванович', 'Москва');
insert into employee(first_name, last_name, middle_name, city) values('Анатолий', 'Петров', 'Сергеевич', 'Москва');
insert into employee(first_name, last_name, middle_name, city) values('Иннокентий', 'Сидоров', 'Михайлович', 'Сургут');
commit;
update employee set fio = 'Программист' where emp_id = 1;
update employee set fio = 'Системный администратор' where emp_id = 2;
update employee set fio = 'Бухгалтер' where emp_id = 3;
commit;

/* заливаем компетенции */
insert into competence(comp_name, comp_desc) values('ReactJS', '');
insert into competence(comp_name, comp_desc) values('C++', 'Язык программирования C++');
insert into competence(comp_name, comp_desc) values('Теория сетей', '');
insert into competence(comp_name, comp_desc) values('Протоколы передачи', '');
insert into competence(comp_name, comp_desc) values('1С', '');
insert into competence(comp_name, comp_desc) values('2-НДФЛ', '');
insert into competence(comp_name, comp_desc) values('PL/SQL', 'Язык программирования PL/SQL');
insert into competence(comp_name, comp_desc) values('C#', 'Язык программирования C#');
insert into competence(comp_name, comp_desc) values('PostgreSQL', 'Знание баз данных PostgreSQL');
insert into competence(comp_name, comp_desc) values('Oracle', 'Знание баз данных Oracle');
insert into competence(comp_name, comp_desc) values('Scala', 'Язык программирования Scala');
insert into competence(comp_name, comp_desc) values('Swift', 'Язык программирования Swift');
insert into competence(comp_name, comp_desc) values('Objective-C', 'Язык программирования Objective-C');
commit;

/* заливаем связку сотрудника-компетенции*/
/* Иванов Программист 'ReactJS', 'C++' */
insert into emp_compet(emp_id, comp_id, experience, salary_exp) values(1, 1, 5, 150000);
insert into emp_compet(emp_id, comp_id, experience, salary_exp) values(1, 2, 5, 150000);
/* Петров Системный администратор 'Теория сетей', 'Протоколы передачи' */
insert into emp_compet(emp_id, comp_id, experience, salary_exp) values(2, 3, 3, 50000);
insert into emp_compet(emp_id, comp_id, experience, salary_exp) values(2, 4, 3, 50000);
/* Сидоров Бухгалтер '1С', '2-НДФЛ' */
insert into emp_compet(emp_id, comp_id, experience, salary_exp) values(3, 5, 4, 60000);
insert into emp_compet(emp_id, comp_id, experience, salary_exp) values(3, 6, 4, 60000);
commit;

/* заливка вакансий */
insert into vacancy(vac_name, company_id, salary_from, salary_to, experience, vac_type, city) values('Программист ReactJS', 1, 30000, 50000, 6, 1, 'Нижний Новгород');
insert into vacancy(vac_name, company_id, salary_from, salary_to, experience, vac_type, city) values('Программист ReactJS', 3, 10000, 50000, 3, 1, 'Нижний Новгород');
insert into vacancy(vac_name, company_id, salary_from, salary_to, experience, vac_type, city) values('Системный администратор', 2, 50000, 50000, 3, 2, 'Нижний Новгород');
insert into vacancy(vac_name, company_id, salary_from, salary_to, experience, vac_type, city) values('Программист ReactJS', 1, 50000, 50000, 2, 2, 'Нижний Новгород');
insert into vacancy(vac_name, company_id, salary_from, salary_to, experience, vac_type, city) values('Бухгалтер', 2, 30000, 50000, 4, 1, 'Москва');
insert into vacancy(vac_name, company_id, salary_from, salary_to, experience, vac_type, city) values('Администратор', 4, 50000, 70000, 5, 1, 'Москва');
commit;

/* заливка связки компетенций и вакансий */
insert into vac_compet(vac_id, comp_id) values(1, 1);
insert into vac_compet(vac_id, comp_id) values(1, 2);
insert into vac_compet(vac_id, comp_id) values(2, 1);
insert into vac_compet(vac_id, comp_id) values(2, 2);
insert into vac_compet(vac_id, comp_id) values(3, 3);
insert into vac_compet(vac_id, comp_id) values(3, 4);
insert into vac_compet(vac_id, comp_id) values(4, 1);
insert into vac_compet(vac_id, comp_id) values(4, 2);
insert into vac_compet(vac_id, comp_id) values(5, 5);
insert into vac_compet(vac_id, comp_id) values(5, 6);
insert into vac_compet(vac_id, comp_id) values(6, 3);
insert into vac_compet(vac_id, comp_id) values(6, 4);
commit;

create view v_$employees(
    fio,
    city,
    experience,
    list_of_compet,
    salary_exp
    )
as
select
  e.fio,
  e.city,
  ec.experience,
  list(c.comp_name, ', ') list_of_compet,
  ec.salary_exp
from
  emp_compet ec,
  employee e,
  competence c
where 0=0
  and e.emp_id = ec.emp_id
  and c.comp_id = ec.comp_id
group by e.fio,
         e.city,
         ec.experience,
         ec.salary_exp;

create view v_$vacancies
    (vac_id,
     company_name,
     vac_name,
     list_of_compet,
     salary_from,
     salary_to,
     experience,
     city,
     vac_type_name
    )
as
select
  t.vac_id,
  t.company_name,
  t.vac_name,
  list(t.comp_name, ', ') list_of_compet,
  t.salary_from,
  t.salary_to,
  t.experience,
  t.city,
  t.vac_type_name
from(
    select
      v.vac_id,
      c.company_name,
      v.vac_name,
      c2.comp_name,
      v.salary_from,
      v.salary_to,
      v.experience,
      v.city,
      decode(v.vac_type, 1, 'sale', 2, 'rent', '<тип не определен>') vac_type_name
    from
      vacancy v,
      company c,
      vac_compet vc,
      competence c2
    where 0=0
      and c.company_id = v.company_id
      and v.vac_id = vc.vac_id
      and vc.comp_id = c2.comp_id) t
group by t.vac_id,
  t.company_name,
  t.vac_name,
  t.salary_from,
  t.salary_to,
  t.experience,
  t.city,
  t.vac_type_name;

