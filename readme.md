# Guía de Configuración del Proyecto Django Pokemon

Esta guía detalla las instrucciones necesarias para configurar el entorno de desarrollo de un proyecto Django. Cubre la instalación y uso de `pipenv` para la gestión de dependencias y entornos virtuales, así como la configuración de `firewalld` y `nginx` para mejorar la seguridad y el manejo de solicitudes web.

## Tabla de Contenidos

- [Instalación de Pipenv](#instalación-de-pipenv)
- [Configuración del Entorno Virtual con Pipenv](#configuración-del-entorno-virtual-con-pipenv)
  - [Activación del Entorno Virtual](#activación-del-entorno-virtual)
  - [Gestión de Dependencias](#gestión-de-dependencias)
- [Creación y Configuración de un Proyecto Django](#creación-y-configuración-de-un-proyecto-django)
  - [Instalación de Django](#instalación-de-django)
  - [Creación de un Nuevo Proyecto Django](#creación-de-un-nuevo-proyecto-django)
  - [Configuraciones Adicionales](#configuraciones-adicionales)
- [Configuración de Variables de Entorno](#configuración-de-variables-de-entorno)
- [Seguridad y Manejo de Solicitudes Web](#seguridad-y-manejo-de-solicitudes-web)
- [Contribuidores](#contribuidores)
- [Licencia](#licencia)

## Instalación de Pipenv

Pipenv es una herramienta que simplifica la gestión de dependencias de proyectos Python y la creación de entornos virtuales.

Para instalar `pipenv`, ejecuta el siguiente comando en tu terminal:

```bash
pip install pipenv
```

## Configuración del Entorno Virtual con Pipenv
Activación del Entorno Virtual
Una vez instalado pipenv, activa el entorno virtual con:

```bash
pipenv shell
```

## Gestión de Dependencias
Instalar Dependencias desde requirements.txt
Para instalar todas las dependencias especificadas en un archivo requirements.txt:

```bash
pipenv install -r requirements.txt
Para eliminar el entorno virtual:
```

```bash
pipenv --rm
```

## Para obtener la ruta del entorno virtual creado por pipenv:
```bash
pipenv --venv
```

## Creación y Configuración de un Proyecto Django
Instalación de Django
Instala Django dentro del entorno virtual con:

```bash
pipenv install django
```

## Creación de un Nuevo Proyecto Django
Para crear un nuevo proyecto Django, utiliza el siguiente comando, reemplazando <project_name> con el nombre de tu proyecto:

```bash
pipenv run django-admin startproject <project_name>
```

## Configuraciones Adicionales
Configuración de Variables de Entorno
Para gestionar las variables de entorno de forma segura, instala django-environ:

``` bash
pipenv install django-environ
```

## Para crear una nueva aplicación dentro de tu proyecto Django:
```bash
python manage.py startapp <app_name>
```

## Seguridad y Manejo de Solicitudes Web
Instrucciones específicas para la configuración de firewalld y nginx deben ser detalladas aquí, enfocándose en cómo estos pasos contribuyen a la seguridad y eficiencia en el manejo de las solicitudes web.

## Contribuidores
Jose Roberto Perez Angulo
