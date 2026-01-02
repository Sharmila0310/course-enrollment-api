# Course Enrollment API

A simple RESTful API built using **Node.js** and **Express.js** to manage course enrollment data.  
This project demonstrates CRUD operations using in-memory data storage.

---

## Features
- Create course enrollments (single & multiple)
- Read all enrollments
- Update single or multiple enrollments
- Delete single or multiple enrollments
- REST API using Express.js

---

## Technologies Used
- Node.js
- Express.js
- JSON

---

## Project Structure
├── app.js
├── routes
│ └── courseRoutes.js
├── package.json

---

## API Endpoints

### Test Routes
| Method | Endpoint | Description |
|------|---------|-------------|
| GET | /Course_Enrollment_API | Test GET |
| PUT | /Course_Enrollment_API | Test PUT |
| DELETE | /Course_Enrollment_API | Test DELETE |

### Enrollment Routes
| Method | Endpoint | Description |
|------|---------|-------------|
| GET | / | Get all enrollments |
| POST | / | Add enrollment(s) |
| PUT | /:id | Update single enrollment |
| PUT | / | Update multiple enrollments |
| DELETE | /:id | Delete single enrollment |
| DELETE | / | Delete multiple enrollments |

---

## Sample Enrollment Object
```json
{
  "id": 1,
  "studentName": "Alice",
  "courseName": "Python",
  "duration": "3 months",
  "fee": 20000
}
