CREATE TABLE applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_name VARCHAR(255) NOT NULL,
    contact_number VARCHAR(15) NOT NULL,
    address TEXT NOT NULL,
    parent_name VARCHAR(255) NOT NULL,
    pu_college VARCHAR(255) NOT NULL,
    board_studied VARCHAR(50) NOT NULL,
    course_attended VARCHAR(100) NOT NULL,
    course_applying VARCHAR(100) NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);