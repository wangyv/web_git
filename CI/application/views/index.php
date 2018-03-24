<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>欢迎</title>
    <base href="<?php echo site_url()?>">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- <form action="welcome/"></form> -->
    <h1>欢迎:<?php echo $this -> session -> userdata('login_name')?></h1>
    <a href="welcome/query_all">所有用户</a>
</body>
</html>