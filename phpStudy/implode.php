

<form action="implode.php" method="post">
    请输入标题内容和日期<br>
    <label for="title">新闻标题</label>
    <input type="text" name="title" id="title"><br>
    <label for="content">新闻内容</label>
    <input type="text" name="content" id="content"><br>
    <label for="date">新闻日期</label>
    <input type="text" name="date" id="date"><br>
    <input type="submit" name="sub" value="提交">
</form>

<?php
    if(isset($_POST['sub'])){
        unset($_POST['sub']);
        echo "<h3>转换字符串结果:".implode(',', $_POST)."</h3>";
    }

?>