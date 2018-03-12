
<h3>查看服务器信息</h3>
<table border='1'>
<caption>显示当前脚本的运行信息</caption>
<tr>
    <td>软件版本</td>
    <td>
        <?php
            echo $_SERVER['SERVER_SOFTWARE'];
        ?>
    </td>
</tr>
<tr>
    <td>端口</td>
    <td>
        <?php
            echo $_SERVER['SERVER_PORT'];
        ?>
    </td>
</tr>
<tr>
    <td>服务名</td>
    <td>
        <?php
            echo $_SERVER['SERVER_NAME'];
        ?>
    </td>
</tr>
<tr>
    <td>文档路径</td>
    <td>
        <?php
            echo $_SERVER['DOCUMENT_ROOT'];
        ?>
    </td>
</tr>
<tr>
    <td>文件路径</td>
    <td>
        <?php
            echo $_SERVER['SCRIPT_FILENAME'];
        ?>
    </td>
</tr>
<tr>
    <td>运行时间</td>
    <td>
        <?php
            date_default_timezone_set('Asia/Shanghai');
            echo date("Y-m-d H:i:s");
        ?>
    </td>
</tr>

</table>


<?php



?>