create database IDCP;

use IDCP;

create table usuario(
	usuario_id varchar(36) primary key,
    email varchar(36) ,
    nombre varchar(36) ,
    apellido varchar(36) ,
    direccion varchar(36) ,
    seguro varchar(36) 
);
INSERT INTO usuario (usuario_id,email,nombre,apellido,direccion,seguro)
VALUES (uuid(),"jose@tt","carlos","perez","casa 4","456-466-4564-654");

INSERT INTO usuario (usuario_id,email,nombre,apellido,direccion,seguro)
VALUES (uuid(),"jose@tt","carlos","perez","casa 4","456-466-4564-654");


create table medico(
	medico_id varchar(36) primary key,
    nombre varchar(36) ,
    apellido varchar(36) ,
    consultorio varchar(36) ,
    departamento varchar(36) 
    
);

INSERT INTO medico (medico_id,nombre,apellido,consultorio,departamento)
VALUES (uuid(),"luis doctor","cabral","consultorio","#12");

INSERT INTO medico (medico_id,nombre,apellido,consultorio,departamento)
VALUES (uuid(),"perez doctor","klein","consultorio","#14");

create table consulta(
	noRecord_id varchar(36) primary key,
    total_a_pagar varchar(36) ,
    estado_del_paciente varchar(36),
    id_usuario varchar(36),
    foreign key (id_usuario) references usuario(usuario_id) on delete cascade
    
);

INSERT INTO consulta (noRecord_id,total_a_pagar,estado_del_paciente,id_usuario)
VALUES (uuid(),"150","abierto","337e9e49-3c1d-11ed-9a66-244bfe975dea");

create table medicoConsulta(
	id_medicoConsulta int primary key auto_increment,
	nodeRecord varchar(36),
    id_id_medico varchar(36),
    foreign key ( id_id_medico) references medico(medico_id),
    foreign key ( nodeRecord) references consulta(noRecord_id)
);

INSERT INTO medicoConsulta (nodeRecord,id_id_medico)
VALUES ("6f24544b-3c1f-11ed-9a66-244bfe975dea","b359a314-3c25-11ed-9a66-244bfe975dea");


#select seccion

select * from usuario;

select * from consulta;
select * from medico;
select * from medicoConsulta;

#nested queries

#################################################

select usuario.usuario_id, usuario.email, usuario.apellido, usuario.direccion
from usuario
join consulta
on usuario.usuario_id = consulta.id_usuario;

select usuario.usuario_id, usuario.email, usuario.apellido, usuario.direccion
from usuario
inner join consulta
on usuario.usuario_id = consulta.id_usuario;

select usuario.usuario_id, usuario.email, usuario.apellido, usuario.direccion
from usuario
right join consulta
on usuario.usuario_id = consulta.id_usuario;

select usuario.usuario_id, usuario.email, usuario.apellido, usuario.direccion
from usuario
left join consulta
on usuario.usuario_id = consulta.id_usuario;
################################################

#nested querys

select medico.nombre
from medico
where medico.medico_id = (
	
    select medicoConsulta.id_id_medico
    from medicoConsulta
    where medicoConsulta.id_id_medico = "b359a314-3c25-11ed-9a66-244bfe975dea"
    

);



select usuario.nombre , usuario.email
from usuario
where usuario.usuario_id = "2bf51fa9-3c1d-11ed-9a66-244bfe975dea" ;

select usuario.nombre
from usuario
where usuario.usuario_id = "2bf51fa9-3c1d-11ed-9a66-244bfe975dea"
union
select total_a_pagar from consulta where consulta.estado_del_paciente = "abierto"
union
select consulta.estado_del_paciente
from consulta
where consulta.id_usuario = "2bf51fa9-3c1d-11ed-9a66-244bfe975dea";


select usuario.usuario_id,usuario.nombre, usuario.email, usuario.apellido, usuario.direccion
from usuario
join consulta
on usuario.usuario_id = consulta.id_usuario
and consulta.estado_del_paciente ="abierto"
and consulta.id_usuario = "2bf51fa9-3c1d-11ed-9a66-244bfe975dea";

select usuario.usuario_id,usuario.nombre, usuario.email, usuario.apellido, usuario.direccion
from usuario
join consulta
on usuario.usuario_id = consulta.id_usuario
and consulta.estado_del_paciente ="abierto"
and consulta.id_usuario = "337e9e49-3c1d-11ed-9a66-244bfe975dea";

################################################

select *
from consulta
 join turno
on consulta.noRecord_id= turno.noRecord order by turno.turno asc;


#eliminar tablas de idcp;
drop table usuario;
drop table consulta;
drop table medico;