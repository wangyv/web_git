<?php
    echo "<table border='1'>";
    echo "<caption>======================== 第一种九九乘法表 ========================</caption>";
    for($i=1;$i<=9;$i++){
        echo "<tr>";
        for($j=1;$j<=$i;$j++){
            echo "<td>";
            echo "$i * $j = ".$i*$j." ";
            echo "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";

?>