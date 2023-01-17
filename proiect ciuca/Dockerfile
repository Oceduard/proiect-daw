# Utilizează imaginea nginx ca bază
FROM nginx:alpine

# Copiază fișierele site-ului în container
COPY . /usr/share/nginx/html

# Definește portul pe care containerul va asculta
EXPOSE 80

# Rulează nginx
CMD ["nginx", "-g", "daemon off;"]
