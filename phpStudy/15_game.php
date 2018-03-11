<?php
    if(isset($_POST['sub'])){
        $start = $_POST['start'];
    }

?>

<form action="15_game.php" method="post">
    <label for="start">你出拳</label>
    <select name="start" id="start">
        <option value="1" <?php echo  $start==1?"selected":""?>>拳头</option>
        <option value="2" <?php echo  $start==2?"selected":""?>>剪子</option>
        <option value="3" <?php echo  $start==3?"selected":""?>>布</option>
    </select>
    <input type="submit" name="sub" value="提交">
</form>

<?php
    if(isset($_POST['sub'])){
        $end =  mt_rand(1,3);
        switch($end){
             case 1:
                echo "出的是拳头<br>";
                break;
            case 2:
                echo "出的是剪子<br>";
                break;
            case 3:
                echo "出的是布<br>";
                break;
        }
        if($end == $start){
            echo "平局";
        }else if($start-$end == -1 || $start-$end == 2){
            echo "你赢了！";
        }else{
            echo "你输了！";
        }
    }

?>