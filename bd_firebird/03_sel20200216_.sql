select * from company;

select * from employee;

select * from competence;

/* список сотрудников и их компетенций */
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

select * from v_$employees;

/* все вакансии на продажу и аренду */
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
  t.vac_type_name
order by t.company_name, t.vac_name;

select *
from vac_compet;


/* список сотрудников и их компетенций */
select * from v_$employees;

/* все вакансии на продажу и аренду */
select *
from v_$vacancies
order by company_name, vac_name;
