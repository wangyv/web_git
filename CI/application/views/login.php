<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>登录</title>
    <base href="<?php echo site_url()?>">
    
</head>
<body>
    <form action="welcome/check_login" method="post">
        <label>用户名：<input type="text" name="username"></label><br><br>
        <label>密码：<input type="password" name="pwd"></label><br><br>
        <input type="submit" value="确定">
        <input type="reset" value="重置">
    </form>
</body>
</html>