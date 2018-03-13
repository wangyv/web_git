<form action="record.php" method="post">
    <h3>录入员工信息</h3>
    <label for="username">姓名</label>
    <input type="text" id="username" name="name"><br>
    <label for="age">年龄</label>
    <input type="text" id="age" name="age"><br><br>
    <input type="submit" name="sub" value="提交">
</form>
<table border=1 width=300>
    <caption>员工信息表</caption>
    <tr>
        <td>编号</td>
        <td>信息</td>
        <td>年龄</td>
    </tr>
    <?php
        Session_start();
        $arr[0]=Array("张三", "18");
        $arr[1]=Array("李四", "25");
        $arr[2]=Array("王五", "20");
        if(isset($_POST['sub'])){
            if($_POST['name'] != null && $_POST['age'] != null){
                $count = count($arr);
                $arr[$count] = Array($_POST['name'], $_POST['age']);
            }
        }
        foreach($arr as $k=>$v){
            echo "<tr>";
            echo "<td>".($k+1)."</td>";
            for($j=0;$j<count($v);$j++){
                echo "<td>";
                echo $v[$j];
                echo "</td>";
            }
            echo "</tr>";
        }
    ?>
</table>
