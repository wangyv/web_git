<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Details</title>
    <style>
        table{
            border-collapse:collapse;
        }
    
    </style>
</head>
<body>
    
    <?php
        $user_id = $_GET['user_id'];



        $con = mysqli_connect("127.0.0.1","root","","test");
        $sql = "set names utf8";
        mysqli_query($con,$sql);
        if (!$con)
        {
            die('Could not connect: ' . mysqli_error());
        }
        $result = mysqli_query($con, "SELECT * FROM t_user WHERE user_id = $user_id");
        $row = mysqli_fetch_array($result);
        
    ?>
    <form action="detail.php?user_id=<?php echo $user_id?>" method="post">
        <label>用户名：<input type="text" value="<?php echo $row['username']?>" name="username"></label><br><br>
        <label>真实姓名：<input type="text" value="<?php echo $row['relname']?>" name="relname"></label><br><br>
        <label>联系方式：<input type="text" value="<?php echo $row['tel']?>" name="tel"></label>
        <input type="submit" value="提交" name="change">
    
    </form>
    <?php
        mysqli_close($con);
    ?>

        
</body>
</html>