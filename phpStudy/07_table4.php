<?php
    echo "<table border='1'>";
    echo "<caption>======================== 第四种九九乘法表 ========================</caption>";
    for($i=1;$i<=9;$i++){
        echo "<tr>";
        for($j=1;$j<=9;$j++){
            if($j<=9-$i){
                echo "<td>";
                echo " ";
                echo "</td>";
            }else{
                echo "<td>";
                echo "$i * ".($j-9+$i)." = ".$i*($j-9+$i)." ";
                echo "</td>";
            }
        }
        echo "</tr>";
    }
    echo "</table>";

?>