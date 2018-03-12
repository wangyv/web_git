<?php
    $num = 5;
    $start = 0;
    $end = 9;
    $count = 0;
    // $arr = array();
    while($count<5){
        $a[]=mt_rand($start,$end);
        $a = array_unique($a);
        $count = count($a);
    };
    echo "产生的随机数： ".implode(" ",$a);

?>