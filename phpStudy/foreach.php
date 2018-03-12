<?php
    $info = array(
        'user' => array(
            array(1, 'zhangsan', 19, 'male'),
            array(2, 'lisi', 20, 'male'),
            array(3, 'wangwu', 25, 'female'),
        ),
        'score' => array(
            array(1, 100, 99, 10),
            array(2, 45, 78, 90),
            array(3, 45, 60, 80),
        ),
        'connect' => array(
            array(1, 110, 'aa@bb.com'),
            array(1, 220, 'aa@cc.com'),
            array(1, 330, 'aa@dd.com'),
        ),
    );
    
    foreach($info as $k=>$v){
        echo "<table border='1'>";
        echo '<caption>';
        print_r($k);
        echo '</caption>';
        foreach($v as $n){
            echo '<tr>';
            for($i=0;$i<count($n);$i++){
                echo "<td width='80px'>";
                echo "$n[$i]";
                echo '</td>';
            }
            echo '</tr>';
        }
        echo '</table>';
    }
    
?>