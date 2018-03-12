<form action="function1_file.php" method="post" enctype="multipart/form-data">
    检测文件名后缀<br><br>
    <input type="file" name="file"><br><br>
    <input type="submit" name="sub" value="检测">
    <input type="submit" name="move" value="移动">
</form>

<?php
if(isset($_POST['sub'])){
    $str = $_FILES['file'];
    $arr = explode('.', $str);
    $count = count($arr)-1;
    echo "后缀名： ".$arr[$count];
}
if(isset($_POST['move'])){
    $str = $_FILES['file'];
    echo move_uploaded_file($str['tmp_name'],"./image/".$str['name']);
}

?>