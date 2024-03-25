<?php
include("../connection.php");

$request_method = $_SERVER['REQUEST_METHOD'];

if($request_method=='POST'){
    $email = $_POST['email'];
    $password = $_POST['password'];

    $check_email = $mysqli->prepare('SELECT email FROM users WHERE email=?');
    $check_email->bind_param('s', $email);
    $check_email->execute();
    $check_email->store_result();
    $email_exists = $check_email->num_rows();


    if($email_exists == 0){
        $hashed_password = password_hash($password, PASSWORD_BCRYPT);
        $query = $mysqli->prepare('INSERT INTO users(email,password) values(?,?);');
        $query->bind_param('ss', $email, $hashed_password);
        $query->execute();
        $query->store_result();
        $created_id = $mysqli->insert_id;
        $response['status'] = "success";
        $response['message'] = "User was created successfully";
    }else {
        $response["status"] = "user already exists";
        $response["message"] = "user $name wasn't created";
    }
    
}else{
    $response["status"] = "error";
    $response["message"] = "Missing required fields";
}

echo json_encode($response);