<h3>请输入需要查询的姓名：</h3>
<form action="array_key_exists.php" method="post">
    <label>姓名：<input type="text" name="name"></label>
    <input type="submit" name="sub" value="提交">
</form>

<?php
    $arr['laoshan'] = 100;
    $arr['laoxie'] = 98;
    $arr['laowu'] = 60;
    if(isset($_POST['sub'])){
        $str = $_POST['name'];
        if(array_key_exists($str, $arr)){
            echo "$str 的成绩是：$arr[$str]";
        }else{
            echo "<script>alert('查无此人！')</script>";
        }
    }



?>