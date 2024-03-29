# Guía de Configuración del Proyecto Django Pokemon

## Link Desarrollo

```bash
https://robertoperezangulo.github.io/CursoWeb/index.html
```

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

## Correr el server 
- Este comando servira para correr el API python manage.py runserver 127.0.0.1:8001
```bash
pipenv run dev
``` 

```bash
python manage.py startapp <app_name>
```
## Página Principal
La página principal es la puerta de entrada a la página. Aquí se encuentran las tarjetas donde se muetsra el contenido de cada pokemon. Cada tarjeta proporciona una vista previa de información clave.
<img width="1434" alt="Screenshot 2024-02-22 at 18 20 15" src="https://github.com/RobertoPerezAngulo/CursoWeb/assets/88848356/2224fa89-38f9-484f-848e-94b3de739f97">
<img width="1434" alt="Screenshot 2024-02-22 at 18 20 15" src="/static/pokemons.png">


## Página de Contacto
¿Quieres ponerte en contacto? Aquí encontrarás un formulario para ingreasar tus datos y enviarnos un mensaje directamente. Ya sea para consultas, colaboraciones, etc., envia tu mensaje y nos pondremos en contacto contigo.
<img width="1429" alt="Screenshot 2024-02-22 at 18 20 29" src="/static/body.png">


## Página de quien soy
Como desarrollador esta es una breve platica sobre mi y bla bla bla.... Xd
<img width="1440" alt="Screenshot 2024-02-22 at 18 20 49" src="/static/who.png">


## Pagina del Creador
¿Sabes quién está detrás de todo esto? Aquí encontrarás una breve descripcion de quien es el creador de este proyecto. Si quieres saber un poco más acerca de su trayectoria, experiencia y hablididaes puedes descargar su CV para conocer un poco más.
<img width="1439" alt="Screenshot 2024-02-22 at 18 21 10" src="/static/body.png">


## Seguridad y Manejo de Solicitudes Web
Instrucciones específicas para la configuración de firewalld y nginx deben ser detalladas aquí, enfocándose en cómo estos pasos contribuyen a la seguridad y eficiencia en el manejo de las solicitudes web.

## Contribuidores
Jose Roberto Perez Angulo
