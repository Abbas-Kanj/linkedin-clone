<?php
include("../connection.php");

$email = $_POST['email'];
$password = $_POST['password'];

$query = $mysqli->prepare('SELECT * FROM users WHERE email=?');
$query->bind_param('s', $email);
$query->execute();
$query->store_result();
$query->bind_result($user_id, $username, $email, $hashed_password, $biography, $education, $skills,);
$query->fetch();
$num_rows = $query->num_rows();

if($num_rows == 0){
    $response['status'] = 'user not found!';
}else{
    if (password_verify($password, $hashed_password)){
        $response['status'] = 'success';
        $response['user'] = [
            'user_id' => $user_id,
            'username' => $username,
            'email' => $password,
            'biography' => $biography,
            'education' => $education,
            'skills' => $skills
        ];
    } else{
        $response['status'] = 'incorrect credentials';
    }
}

echo json_encode($response);