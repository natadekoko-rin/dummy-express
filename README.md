# Dummy Express.js Server

Project Express.js sederhana untuk testing deployment pada server.

## 📋 Persyaratan

- Node.js (versi 12 atau lebih tinggi)
- npm atau yarn

## 🚀 Instalasi & Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan server
```bash
npm start
```

Server akan berjalan pada `http://localhost:3000`

### 3. Test service
Buka browser atau gunakan curl:
```bash
curl http://localhost:3000/api/health
```

Response:
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2026-05-05T12:00:00.000Z"
}
```

## 📦 Service yang Tersedia

- **GET `/api/health`** - Health check endpoint untuk monitoring server status

## 🔧 Konfigurasi

Port default: `3000`

Untuk menggunakan port berbeda, set environment variable:
```bash
PORT=5000 npm start
```

## 📝 Struktur Project

```
dummy-express/
├── index.js          # Main application file
├── package.json      # Project configuration
├── .gitignore        # Git ignore file
└── README.md         # This file
```

## 📖 Catatan

Project ini adalah dummy/minimal setup yang cocok untuk:
- Testing deployment process
- Verifikasi server environment
- Learning Express.js basics
- CI/CD pipeline testing

Silakan tambahkan service/endpoint lebih lanjut sesuai kebutuhan.
