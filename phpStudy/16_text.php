<?php
    $str = file_get_contents('test.txt');
    echo "<pre>";
    echo $str;
    echo "</pre>";


?>
<form action="next.php" method="post">
    <input type="submit" name="sub1" value="同意注册">
</form>

<form action="index.php" method="post">
    <input type="submit" name="sub2" value="我不同意">   
</form>