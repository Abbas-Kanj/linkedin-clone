CREATE TABLE users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    biography TEXT,
    education TEXT,
    skills TEXT
);

CREATE TABLE companies (
    company_id INT PRIMARY KEY AUTO_INCREMENT,
    company_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TABLE feed_posts (
    feed_post_id INT PRIMARY KEY AUTO_INCREMENT,
    post_title VARCHAR(255) NOT NULL,
    post_desc TEXT
);

CREATE TABLE job_posts (
    job_post_id INT PRIMARY KEY AUTO_INCREMENT,
    job_title VARCHAR(255) NOT NULL,
    job_description TEXT,
    company_id INT,
    FOREIGN KEY (company_id) REFERENCES companies(company_id)
);

CREATE TABLE user_company_feed (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    company_id INT,
    feed_post_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (company_id) REFERENCES companies(company_id),
    FOREIGN KEY (feed_post_id) REFERENCES feed_posts(feed_post_id)
);

INSERT INTO feed_posts (post_title, post_desc)
VALUES
    ('Exciting News in Tech', 'A new breakthrough technology has been announced...'),
    ('Tips for Remote Work Success', 'As remote work becomes more common, here are some tips...'),
    ('Upcoming Events in the City', 'Check out these exciting events happening in the city...'),
    ('Healthy Eating Habits', 'Learn how to improve your diet with these healthy eating tips...'),
    ('Travel Destination Spotlight: Paris', 'Discover the beauty and charm of Paris, the city of light...');
