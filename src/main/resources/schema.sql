create table if not exists numbers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fullname VARCHAR(100) NOT NULL,
    gender VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    mobile VARCHAR(10) NOT NULL,
    details VARCHAR(255) NOT NULL
);