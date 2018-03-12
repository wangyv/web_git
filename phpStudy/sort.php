<table border="1">
    <caption>根据商品上市年份排序</caption>
    <?php
        echo '<tr><td>商品顺序</td><td>商品名称</td></tr>';
        $arr = Array('2012 Macbook Pro','2009 iMac','2011 Macbook Air','2007 iPad1');
        if(isset($_POST['sort'])){
            sort($arr);
        }
        if(isset($_POST['rsort'])){
            rsort($arr);
        }
        for($i=1;$i<=count($arr);$i++){
            echo "<tr>";
            echo "<td>$i</td>";
            echo "<td width=200px>";
            echo $arr[$i-1];
            echo "</td>";
            echo "</tr>";
        }
    ?>
</table>
<br>
<br>
<form action="sort.php" method="post">
    <input type="submit" name="sort" value="正序">
    <input type="submit" name="rsort" value="反序">
</form>