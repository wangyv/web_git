<?php
    $arr[1] = Array("3236","阿里斯-梅里特","美国","1985年07月24日","6","12.92");
    $arr[2] = Array("3246","杰森-查理森","美国","1986年04月04日","4","13.04");
    $arr[3] = Array("2182","汉斯勒-帕切门特","牙买加","1990年06月17日","7","13.12");
    $arr[4] = Array("1804","劳伦斯·克拉克","英国","1990年03月12日","2","13.39");
    $arr[5] = Array("1125","瑞恩-布拉斯怀特","巴巴多斯","1988年06月06日","8","13.4");
    $arr[6] = Array("1477","奥兰·奥尔特加","古巴","1991年07月29日","9","13.43");

?>
<table border=1>
    <caption>110米栏决赛成绩</caption>
    <tr bgColor="#ccc">
        <td>排名</td>
        <td>号码</td>
        <td>姓名</td>
        <td>国籍</td>
        <td>生日</td>
        <td>跑道</td>
        <td>成绩</td>
    </tr>
    <?php
        foreach($arr as $k=>$v){
            switch($k){
                case "1":
                    $color = "#f00";
                    break;
                case "2":
                    $color = "#fa6700";
                    break;
                case "3":
                    $color = "#00f";
                    break;
                default:
                    $color = "#eee";
            }
            echo "<tr bgColor=$color>";
            echo "<td>$k</td>";
            for($j=0;$j<count($v);$j++){
                echo "<td>";
                echo $v[$j];
                echo "</td>";
            }
            echo "</tr>";
        }

    ?>
</table>
