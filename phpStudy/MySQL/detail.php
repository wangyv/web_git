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
    <table border=1>
        <tr>
            <th>ID</th>
            <th>用户名</th>
            <th>真实姓名</th>
            <th>联系方式</th>
            <th>操作</th>
        </tr>
        <?php
            $con = mysqli_connect("127.0.0.1","root","","test");
            $sql = "set names utf8";
            mysqli_query($con,$sql);
            if (!$con)
            {
                die('Could not connect: ' . mysqli_error());
            }
            if(isset($_POST['change'])){
                $username = $_POST['username'];
                $relname = $_POST['relname'];
                $tel = $_POST['tel'];
                $user_id = $_GET['user_id'];

                mysqli_query($con, "UPDATE t_user SET username = '$username', relname = '$relname', tel = '$tel'
                WHERE user_id = $user_id");
                
            }
            $result = mysqli_query($con, "SELECT * FROM t_user");
            while ($row = mysqli_fetch_array($result)){
        ?>
        <tr>
            <td><?php echo $row['user_id']?></td>
            <td><?php echo $row['username']?></td>
            <td><?php echo $row['relname']?></td>
            <td><?php echo $row['tel']?></td>
            <td>
                <a href="change.php?user_id=<?php echo $row['user_id']?>">改变</a>
                |
                <a href="delete.php?user_id=<?php echo $row['user_id']?>" class="del">删除</a>
            </td>
        </tr>
        <?php
            }

            mysqli_close($con);
        ?>
    </table>

    <script src="jquery.min.js"></script>
    <script>
        $(function(){
            $('.del').on('click',function(){
                return confirm("确定删除么？");
            })
        })
    
    </script>
</body>
</html>