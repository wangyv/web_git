<?php
    if(isset($_POST['sub'])){
        $rows = $_POST['rows'];
        // $cols = $_POST['cols'];
        $count = 0;
        for($i=1;$i<=$rows;$i++){
            for($j=1;$j<=$i;$j++){
                if($j%3 == 0){
                    continue;
                }
                echo "$i * $j = ".($i * $j)." ";
            }
            echo "<br>";
        }
        
    }
    


?>

<form action="13_break.php" method="post">
    <label for="rows">输入行：</label>
    <input type="text" name="rows" id="rows">
    <br>
    <!-- <label for="cols">输入列：</label>
    <input type="text" name="cols" id="cols">
    <br> -->
    <br>
    <input type="submit" name="sub" value="生成树">
</form>