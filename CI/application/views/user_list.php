<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Details</title>
    <base href="<?php echo site_url()?>">
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
            foreach($users as $user){
        ?>
        <tr>
            <td><?php echo $user -> user_id?></td>
            <td><?php echo $user -> username?></td>
            <td><?php echo $user -> relname?></td>
            <td><?php echo $user -> tel?></td>
            <td>
                <a href="welcome/change_user/<?php echo $user -> user_id?>">改变</a>
                |
                <a href="welcome/delete_user/<?php echo $user -> user_id?>" class="del">删除</a>
            </td>
        </tr>
        <?php
            }

        ?>
    </table>

    <script src="js/jquery.min.js"></script>
    <script>
        $(function(){
            $('.del').on('click',function(){
                return confirm("确定删除么？");
            })
        })
    
    </script>
</body>
</html>