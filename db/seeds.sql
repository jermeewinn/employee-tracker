INSERT INTO departments (dept_name)
VALUES
    ('Sales'),
    ('Human Resources'),
    ('Finance'),
    ('Research & Development'),
    ('Engineering'),
    ('IT'),
    ('Security'),
    ('C-Suite');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Sales Rep', 60000, 1),
    ('HR Manager', 55000, 2),
    ('Full-Stack Developer', 120000, 7),
    ('Engineer', 125000, 5),
    ('IT Security', 123000, 7),
    ('Building Security', 55000, 8),
    ('Janitor', 45000, 8);



INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Jeremy', 'Huynh', 1, NULL),
    ('Michael', 'Scott', 2, NULL),
    ('Tim', 'Taylor', 4, NULL),
    ('Ronni', 'Pearlmann', 1, 1),
    ('Barney', 'Calhoun', 6, 3);