create database cursonode
go

use cursonode
go

create table Usuarios(
	idUsuario int primary key identity(1,1) not null,
	nombre varchar(20) not null,
	email varchar(20) not null,
	estado tinyint not null
)

insert Usuarios(nombre, email, estado)
values('Josue','test1@gmail.com',1)
go

select * from Usuarios
go

