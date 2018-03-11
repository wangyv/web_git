<?php
    if(isset($_POST['sub'])){
        $rows = $_POST['rows'];
        for($i=1;$i<=$rows;$i++){
            for($j=1;$j<=$rows-$i;$j++){
                echo "&nbsp;";
            }
            for($m=1;$m<=2*$i-1;$m++){
                echo "*";
            }
            echo "<br>";
        }
    }
    echo "<br><br><br>";
    if(isset($_POST['sub'])){
        $rows = $_POST['rows'];
        for($i=1;$i<=$rows;$i++){
            for($j=1;$j<=$rows-$i;$j++){
                echo "&nbsp;";
            }
            if($i==$rows){
                for($m=1;$m<=2*$i-1;$m++){
                    echo "*";
                }
            }else{
                for($m=1;$m<=2*$i-1;$m++){
                    if($m==1||$m==2*$i-1){
                        echo "*";
                    }else{
                        echo "&nbsp;";
                    }
                }
            }
            echo "<br>";
        }
    }


?>

<form action="14_star.php" method="post">
    <label for="rows">输入星星树行数</label>
    <input type="text" id="rows" name="rows">
    <input type="submit" name="sub" value="提交">
</form>