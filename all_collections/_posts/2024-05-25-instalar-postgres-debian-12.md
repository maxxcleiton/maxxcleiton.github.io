---
layout: post
title: Como instalar o PostgreSQL e o pgadmin4 (web/desktop) no linux (Debian 12)
date: 2024-05-25 21:20:00 -03:00
categories: [utilitarios,linux,postgres,pgsql,debian12]
---

Primeiro instale o Repository

```bash
sudo apt install -y postgresql-common
sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh
```

E então instale o PostgresSQL:

```bash
sudo apt install -y postgresql
```

 Instale o pgAdmin4

```bash
curl -fsS https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo gpg --dearmor -o /usr/share/keyrings/packages-pgadmin-org.gpg
```

```bash
sudo sh -c 'echo "deb [signed-by=/usr/share/keyrings/packages-pgadmin-org.gpg] https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'
```

- Caso queira instalar para desktop e web:

```bash
sudo apt install pgadmin4
```

- Instalar apenas no desktop:

```bash
sudo apt install pgadmin4-desktop
```

- Instalar apenas no WEB:

```bash
sudo apt install pgadmin4-web 
```

- Rode o seguinte para configurar o pgAdmin 4 WEB:

```bash
sudo /usr/pgadmin4/bin/setup-web.sh
```

Ele irá pedir email e senha, que será utilizado para acessar o pgAdmin4 web.

E então você poderá acessar [https:127.0.0.1/pgadmin4](https:127.0.0.1/pgadmin4){:target="_blank"}

### Alterar senha do usuário padrão do postgres

Agora que foi realizada a instalação, é recomendado alterar a senha do usuário root padrão que vem na instalação do PosgreSQL

Acesse o ambiente psql no terminal:

```bash
sudo -u postgres psql
```

Para alterar a senha, altere o 'sua senha aqui' com a senha desejada.

```sql
ALTER USER postgres WITH PASSWORD 'sua senha aqui';
```

### Adicionar novo usuário e banco

Já com o ambiente psql ativo (sudo -u postgres psql) rode o seguinte comando, substituindo os nomes de acordo com o desejado:

```sql
CREATE USER nome_do_usuario with CREATEDB CREATEROLE;
ALTER USER nome_do_usuario with PASSWORD 'senha_do_seu_usuario';
```

Você poderá conferir se deu certo, se o nome de seu usuário aparecer ao digitar:

```sql
\du
```

### Como abrir o pgAdmin4 no desktop:

Procure no menu iniciar por "pgAdmin4".

### Como abrir o pgAdmin4 no web:

Abra o seu pgAdmin4 versão desktop, e então faça o seguinte:

No menu superior, procure por:
	
	File > Runtime > View Log

Role pra baixo até achar:

	Application Server URL: http://127.0.0.1:{PORT_NUMBER}/?key={YOUR_KEY}

Copie esse link e abra no seu navegador.

Salve nos favoritos o link que aparecer.

**Seja FELIZ.**

Fontes:

[https://www.postgresql.org/download/linux/debian/](https://www.postgresql.org/download/linux/debian/){:target="_blank"}
[https://www.pgadmin.org/download/pgadmin-4-apt/](https://www.pgadmin.org/download/pgadmin-4-apt/){:target="_blank"}
[https://stackoverflow.com/a/77839264/25248509](https://stackoverflow.com/a/77839264/25248509){:target="_blank"}