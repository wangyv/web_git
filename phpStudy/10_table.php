<?php
    if(isset($_POST['sub'])){
        $rows = $_POST['rows'];
        $cols = $_POST['cols'];
    }
    
?>
<meta charset='utf-8'>
<form action="10_table.php" method="post">
    <h3>输入行列生成表格</h3>
    <label for="rows">输入行：</label>
    <input type="text" name="rows" id="rows">
    <br>
    <label for="cols">输入列：</label>
    <input type="text" name="cols" id="cols">
    <br>
    <br>
    <input type="submit" name="sub" value="生成表格">
    <input type="reset" name="reset" value="重置行列">
</form>
<?php 

    if(isset($_POST['sub'])){
        echo "<table border='1'>";
        echo "<caption>用户动态输出表格行：$rows 列：$cols</caption>";
        for($i=0;$i<$rows;$i++){
            if($i % 2 == 0){
                echo "<tr bgColor='pink'>";
            }else{
                echo "<tr bgColor='#fa6700'>";
            }
            for($j=0;$j<$cols;$j++){
                echo "<td width='40px' align='center'>";
                echo "$j";
                echo "</td>";
            }
            echo "</tr>";
        }
        echo "</table>";
    }
    
?>