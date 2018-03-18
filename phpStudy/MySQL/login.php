<?php
    $username = $_POST['username'];
    $pwd = $_POST['pwd'];

    $realname = $_POST['realname'];
    $tel = $_POST['tel'];

    // sql
    $con = mysqli_connect("127.0.0.1","root","","test");
    $sql = "set names utf8";
    mysqli_query($con,$sql);
    if (!$con)
    {
        die('Could not connect: ' . mysqli_error());
    }
    $sql="INSERT INTO t_user (username, pwd, relname, tel)
    VALUES
    ('$username','$pwd','$realname','$tel')";
    // mysqli_query($con, $sql);
    if (mysqli_query($con, $sql))
    {
        header('location:detail.php');
    }else{
        die('Error: ' . mysql_error());
    }
    

    mysqli_close($con);
?>