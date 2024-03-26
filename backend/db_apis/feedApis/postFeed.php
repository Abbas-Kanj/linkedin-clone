<?php
include("../connection.php");

$request_method = $_SERVER['REQUEST_METHOD'];

if($request_method=='POST'){
    $post_title = $_POST['post_title'];
    $post_desc = $_POST['post_desc'];

    $check_feed_post_id = $mysqli->prepare('SELECT post_title FROM feed_posts WHERE post_title=?');
    $check_feed_post_id->bind_param('s', $post_title);
    $check_feed_post_id->execute();
    $check_feed_post_id->store_result();
    $check_feed_post_exists = $check_feed_post_id->num_rows();


    if($check_feed_post_exists == 0){
        $query = $mysqli->prepare('INSERT INTO feed_posts(post_title,post_desc) values(?,?);');
        $query->bind_param('ss', $post_title, $post_desc);
        $query->execute();
        $query->store_result();
        $created_id = $mysqli->insert_id;
        $response['status'] = "success";
        $response['message'] = "post was created successfully";
    }else {
        $response["status"] = "post already exists";
        $response["message"] = "post wasn't created";
    }
    
}else{
    $response["status"] = "error";
    $response["message"] = "Missing required fields";
}

echo json_encode($response);