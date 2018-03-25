<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>update</title>
    <base href="<?php echo site_url()?>">
</head>
<body>
    <form action="welcome/update_user/<?php echo $user -> user_id?>" method="post">
        <label>用户名：<input type="text" name="username" value="<?php echo $user -> username?>"></label><br><br>
        <label>密码：<input type="text" name="pwd" value="<?php echo $user -> pwd?>"></label><br><br>
        <label>真实姓名：<input type="text" name="realname" value="<?php echo $user -> relname?>"></label><br><br>
        <label>电话：<input type="text" name="tel" value="<?php echo $user -> tel?>"></label><br><br>
        <input type="submit" value="修改">
        <input type="reset" value="重置">
    
    </form>
</body>
</html>