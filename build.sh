#!/usr/bin/env bash
# 1. Detiene la ejecución si algún comando falla
set -o errexit

# 2. Compila el frontend (React + Unity WebGL)
cd frontend
npm install
npm run build
cd ..

# 3. Instala los paquetes de Python requeridos por Django
pip install -r requirements.txt

# 4. Recolecta todos los estáticos (React dist, Unity, CSS, JS) en la carpeta staticfiles/
python manage.py collectstatic --no-input

# 5. Aplica los cambios o migraciones pendientes en la base de datos
python manage.py migrate