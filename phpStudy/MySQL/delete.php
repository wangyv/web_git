


<?php
    $user_id = $_GET['user_id'];

    $con = mysqli_connect("127.0.0.1","root","","test");
    $sql = "set names utf8";
    mysqli_query($con,$sql);
    if (!$con)
    {
        die('Could not connect: ' . mysqli_error());
    }


    if (mysqli_query($con, "DELETE FROM t_user WHERE user_id='$user_id'"))
    {
        header('location:detail.php');
    }else{
        die('Error: ' . mysql_error());
    }




?>

