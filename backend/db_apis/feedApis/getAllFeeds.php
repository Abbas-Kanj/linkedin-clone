<?php
include("../connection.php");

$query = $mysqli->prepare('SELECT * FROM feed_posts');
$query->execute();
$query->store_result();

$num_rows = $query->num_rows();

if($num_rows == 0){
    $response['status'] = "no feed posts!";
}else{
    $query->bind_result($feed_post_id, $post_title, $post_desc);

    $feed_posts = [];
    while($query->fetch()){
        $feed_post = [
            'feed_post_id' => $feed_post_id,
            'post_title' => $post_title,
            'post_desc' => $post_desc
        ];
        $feed_posts[] = $feed_post; 
    }
    $response['status'] = 'success';
    $response['feed_posts'] = $feed_posts;

}

echo json_encode($response);