<?php
    // echo "<table>"
    // echo "<caption></caption>"

    // echo "</table>"

    echo "============== 使用dowhile循环打印的九九乘法表 ==============<br>";
    $i = 1;
    do{
        $j = 1;
        do{
            echo "$i * $j = ".$i*$j." ";
            $j++;
        }while($j <= $i);
        echo "<br>";
        $i++;
    }while(($i <= 9));



?>