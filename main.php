<?php
//    最基本的链接数据库
    $servername = 'localhost';
    $username = 'root';
    $password = '9981aa';
    $tablename = 'justTest';

    $conn = new mysqli($servername,$username,$password,$tablename);
    if ($conn -> connect_error) {
        die("连接失败：" . $conn->connect_error);
    }
    echo "连接成功";

    $sql = "SELECT * FROM lagou WHERE location='shenzhen' AND job = 'iOS'";
    $result = $conn->query($sql);

    if ($result->num_rows >0) {
        while ($row = $result->fetch_assoc()) {
            echo $row['location'] . $row['job'] . $row['num'] . "<br>";
        }
    } else {
        echo "0 个结果";
    }

    $conn->close();



