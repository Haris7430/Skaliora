
# 🚀 Scaliora

**Scaliora** is a full-stack task management application built using the **MEAN** stack (MongoDB / MySQL, Express.js, Angular, Node.js).  
It helps users create, update, and track tasks efficiently while maintaining a clean architecture for scalability and performance.

---

## 🧩 Tech Stack

### 🌐 Frontend
- **Angular 17+**
- **TypeScript**
- **Bootstrap / Tailwind (if used)**

### ⚙️ Backend
- **Node.js**
- **Express.js**
- **TypeORM**
- **MySQL**
- **Clean Architecture**
- **Husky (for Git pre-commit hooks)**

---

## 📁 Folder Structure

Scaliora/
│
├── backend/
│   ├── src/
│   │   ├── app/                # Use-cases / business logic
│   │   ├── domain/             # Entities and repository interfaces
│   │   ├── infra/              # Database repositories
│   │   ├── interfaces/         # Controllers & routes
│   │   └── config/             # Data source and environment setup
│   ├── package.json
│   ├── tsconfig.json
│   └── .eslintrc.json
│
└── frontend/
    ├── src/
    │   ├── app/
    │   ├── assets/
    │   └── environments/
    ├── angular.json
    └── package.json

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
git clone https://github.com/Haris7430/scaliora.git
cd scaliora

### 2️⃣ Backend Setup
cd backend
npm install

Configure your database connection inside:
src/config/data-source.ts

Then run migrations or initialize the DB:
npm run start

The backend will start on http://localhost:3000

### 3️⃣ Frontend Setup
cd ../frontend
npm install
ng serve

Frontend will be available at http://localhost:4200

---

## 🧠 Husky Setup (Git Pre-Commit Hook)

**Husky** helps maintain clean commits by running checks (like linting) before every commit.

If Husky is not yet initialized:
npm install husky --save-dev
npx husky install

To add a pre-commit hook that runs ESLint:
npx husky add .husky/pre-commit "npm run lint"
git add .husky/pre-commit

Now, every time you commit, ESLint will check your code automatically.

---

## 🧪 API Testing

| Method | Endpoint | Description |
|---------|-----------|-------------|
| POST | /tasks | Create new task |
| GET | /tasks?userId={id} | Get tasks for user |
| PUT | /tasks/:id | Update existing task |
| DELETE | /tasks/:id | Delete task |

---

## 🧱 Architecture Overview

Scaliora follows **Clean Architecture** principles:
- **Domain layer** → business entities and rules  
- **Application layer** → use-cases (logic)  
- **Infrastructure layer** → database logic  
- **Interface layer** → routes & controllers  

This ensures scalability, maintainability, and testability.

---

## 👨‍💻 Author
**Haris (aka Groot)**  
Full Stack Developer (MEAN Stack)  
[GitHub Profile](https://github.com/Haris7430)

---

## 📜 License
This project is licensed under the **MIT License**.

