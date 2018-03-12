<style>
    .container{
        width: 500px;
        height: 300px;
        margin: 200px auto;
        background: #eee;
        padding: 20px;
    }
</style>


<div class="container">
    <form action="rand.php" method="post">
        <h3>福利彩票号码生成器</h3>
        <input type="submit" name="sub" value="单机生成新的号码">
    </form>
    <div class="caipiao">
        <?php
            if(isset($_POST['sub'])){
                // $arr = array(
                //     '第一注: '=>array(),
                //     '第二注: '=>array(),
                //     '第三注: '=>array(),
                //     '第四注: '=>array(),
                //     '第五注: '=>array(),
                // );
                // foreach($arr as $k=>$v){
                //     for($i=0;$i<7;$i++){
                //         $v[$i] = mt_rand(1,30);
                //     }
                //     echo "<p style=text-align:left>".$k.implode(',&nbsp;', $v)."<br></p>";
                // }
                $arr = array();
                for($i=1;$i<=5;$i++){
                    echo "<p>第".$i."注: ";
                    $arr[$i] = array();
                    for($j=0;$j<7;$j++){
                        $random = mt_rand(1,30);
                        if(in_array($random,$arr[$i])){
                            $j--;
                            continue;
                        }else{
                            $arr[$i][$j] = $random;
                        }
                        
                    }
                    echo implode(',&nbsp;', $arr[$i]);
                    echo "<br></p>";
                }
            }
        ?>
    </div>
    
</div>




