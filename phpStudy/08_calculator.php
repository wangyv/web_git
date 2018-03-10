<?php
    
    if(isset($_POST['sub'])){
        $first = $_POST['first'];
        $second = $_POST['second'];
        $operation = $_POST['operation'];
        $a = false;
        if(is_numeric($first) && is_numeric($second)){
            $a = true;
        }
        if($a == true){
            switch($operation){
                case "+":
                    $res = $first + $second;
                    break;
                case "-":
                    $res = $first - $second;
                    break;
                case "*":
                    $res = $first * $second;
                    break;
                case "/":
                    $res = $first / $second;
                    break;
                case "%":
                    $res = $first % $second;
                    break;
            }
        }else{
            echo "<script>alert('输入的不是数字')</script>";
        }
        
    }

?>

<meta charset='utf-8'>
<form action="08_calculator.php" method="post">
    <table border='1' width='900px' height='100px'>
        <caption>计算器</caption>
        <tr style="text-align:center">
            <td><input type='text' name="first"></td>
            <td>
                <select name="operation">
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">x</option>
                    <option value="/">/</option>
                    <option value="%">%</option>
                </select>
            </td>
            <td><input type='text' name="second"></td>
            <td><input type="submit" value="计算" name="sub"></td>
        </tr>
        <?php
            if(isset($_POST['sub'])){
                echo "<tr>";
                echo "<td colspan=4 style='padding-left:20px'>";
                echo "结果为$res";
                echo "</td>";
                echo "</tr>";
            }
        ?>
    </table>
</form>

