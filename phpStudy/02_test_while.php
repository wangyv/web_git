<?php
    // echo "<table>"
    // echo "<caption></caption>"

    // echo "</table>"

    echo "============== 使用while循环打印的九九乘法表 ==============<br>";
    $i = 1;
    while($i <= 9){
        $j = 1;
        while($j <= $i){
            echo "$i * $j = ".$i*$j." ";
            $j++;
        }
        echo "<br>";
        $i++;
    }



?>