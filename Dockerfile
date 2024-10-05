# Usa una imagen base de Node.js 18
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json desde la carpeta 'backend'
COPY backend/package.json ./

# Verifica que los archivos se copiaron correctamente
RUN echo "Archivos en /app después de COPY package*.json:" && ls -la /app

# Instala las dependencias del backend
RUN npm install

# Copia el resto del código fuente del backend
COPY backend/. ./

# Expone el puerto que utiliza la aplicación backend
EXPOSE 3000

# Comando para ejecutar la aplicación backend
CMD ["npm", "start"]