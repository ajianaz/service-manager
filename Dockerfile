# Gunakan Node.js versi terbaru
FROM node:20-alpine

# Tentukan workdir di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json untuk instalasi dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --omit=dev

# Install PM2 secara global untuk manajemen proses
RUN npm install -g pm2

# Salin seluruh kode sumber ke dalam container
COPY . .

# Build Prisma client
RUN npx prisma generate

# Expose port untuk akses aplikasi
EXPOSE 8080

# Jalankan aplikasi menggunakan PM2 (1 instance)
CMD ["pm2-runtime", "start", "server.js", "--name", "service-manager", "-i", "1"]
