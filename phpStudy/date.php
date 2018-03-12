<?php
    $arr = Array(
        "02-22"=>"读书",
        "03-15"=>"看报",
        "09-03"=>"睡觉",
    );

?>

<form action="date.php" method="post">
    <h3>单击查询当前日期</h3>
    <label for="seek">输入查询日期</label>
    <input type="date" id="seek" name="seek">
    <input type="submit" value="查询" name="sub">
    <input type="reset" value="重置" name="rst">
</form>


<?php
    if(isset($_POST['sub'])){
        if($_POST['seek']){
            $date = explode('-', $_POST['seek']);
            unset($date[0]);
            $content = null;
            foreach($arr as $k=>$v){
                $arr1 = explode('-', $k);
                $month = $arr1[0];
                $day = $arr1[1];
                if($date[1] == $month && $date[2] == $day){
                    $content = $v;
                }
            }

            if($content != null){
                echo "<script>alert('$content')</script>";
            }else{
                echo "<script>alert('无备忘')</script>";
            }
        }else{
            echo "<script>alert('请输入日期')</script>";
        }
    }

?>