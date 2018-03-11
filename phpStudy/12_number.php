<?php
    $count = 0;
    for($i=1; $i<=1000; $i++){
        if($i%2 !=0){
            echo $i.' ';
            $count++;
            if($count%10 == 0){
                echo "<br>";
            }
        }
    }


?>