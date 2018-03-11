<?php
    echo "<table border='1'>";
    for($i=0;$i<100;$i++){
        if($i % 2 == 0){
            echo "<tr bgColor='pink' onmouseout='out(this)' onmouseover='over(this)'>";
        }else{
            echo "<tr bgColor='#fa6700'  onmouseout='out(this)' onmouseover='over(this)'>";
        }
        
        for($j=0;$j<10;$j++){
            echo "<td width='80px' align='center'>";
            echo "$j";
            echo "</td>";
        }
        echo "</tr>";
    }
    echo "</table>";

?>
<meta charset='utf-8'>
<script>
    var $color = null;
    function out(tr){
        tr.bgColor = $color;
    }
    function over(tr){
        $color = tr.bgColor;
        tr.bgColor = 'red';
    }
</script>