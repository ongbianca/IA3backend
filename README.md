# IA3 Backend – File Upload Service (Multer)

This backend application implements the server-side requirements for the IA3 Full-Stack File Upload Activity.  
It uses **Node.js, Express, Multer, UUID**, and provides image upload functionality for user signup and place creation.

## 🚀 Features
- Handles image file uploads using **Multer**
- Stores uploaded files in `/uploads/images`
- Validates MIME types (`image/png`, `image/jpeg`, `image/jpg`)
- Generates unique filenames using **UUID**
- Provides API endpoints for:
  - User Signup with profile picture
  - Create Place with image
  - Delete Place (+ automatically deletes image file)
- Serves uploaded images statically
- Includes global error handling + upload rollback
- CORS enabled for frontend communication

---

## 📁 Project Structure
IA3backend
│── app.js
│── package.json
│── /controllers
│ ├── users-controllers.js
│ └── places-controllers.js
│── /routes
│ ├── users-routes.js
│ └── places-routes.js
│── /middleware
│ └── file-upload.js
│── /uploads
└── images (empty before runtime)


---

## 🔧 Installation

1. Clone this repository:
   ```bash
   git clone <repo-link>
2. Install dependencies:
   npm install
3. Start the server:
   node app.js

The server runs by default on http://localhost:5005
.

📌 API Endpoints
POST /api/users/signup

Uploads a user image + returns file metadata.

POST /api/places

Creates a place with an uploaded image.

DELETE /api/places/:pid

Deletes the place AND its corresponding image file.

🖼 Serving Image Files

Uploaded files are available at:

http://localhost:5005/uploads/images/<filename>
