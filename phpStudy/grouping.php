<h3>请输入三位不同员工的姓名</h3>
<form action="grouping.php" method="post">
    <label>分组姓名1：<input type="text" name="name1"></label><br>
    <label>分组姓名2：<input type="text" name="name2"></label><br>
    <label>分组姓名3：<input type="text" name="name3"></label><br>
    <input type="submit" name="sub" value="提交">
</form>
<?php
    if(isset($_POST['sub'])){
        if($_POST['name1'] != $_POST['name2'] && $_POST['name1'] != $_POST['name3'] && $_POST['name2'] != $_POST['name3']){
            echo "<script>alert('分组成功');</script>";
        }else{
            echo "<script>alert('分组姓名有重复 请重新输入');</script>";
        }
    }


?>