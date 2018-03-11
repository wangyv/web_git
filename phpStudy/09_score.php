<?php
if(isset($_POST['sub'])){
    $score = $_POST['score'];
    if(is_numeric($score) && $score >0 $$ $score <=100){
        if($score>=80 && $score<=100){
            echo "<script>alert('优秀')</script>";
        }else if($score>=60 && $score<=80){
            echo "<script>alert('及格')</script>";
        }else{
            echo "<script>alert('不及格')</script>";
        }
    }else{
        echo "<script>alert('请输入正确数字')</script>";
    }
}



?>
<meta charset='utf-8'>
<form action="09_score.php" method="post">
    <h3>输入分数查成绩</h3>
    <label for="score">分数：</label>
    <input type="text" name="score" id="score">
    <input type="submit" name="sub" value="提交查询">
    <input type="reset" name="reset" value="重置分数">
</form>