<h3>获取文件上传信息</h3>
<form action="upload.php" method="post"  enctype="multipart/form-data">
    <input type="file" name="file"><br><br>
    <input type="submit" name="sub" value="提交">

</form>

<?php
    if(isset($_POST['sub'])){
        // var_dump($_FILES['file']);
        $arr = $_FILES['file'];
        echo "上传文件信息：<br> 文件名：".$arr['name'];
        $arr1 = explode(".", $arr['name']);
        $count = count($arr1)-1;
        $str = $arr1[$count];
        echo "<br>文件类型：$str";
        $size = ceil($arr['size']/1024);
        echo "<br>文件大小：$size KB";
    }

?>