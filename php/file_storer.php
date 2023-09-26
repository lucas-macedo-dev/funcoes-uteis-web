<?php

// escrever em um ficheiro
$file = fopen('novo.txt', 'w');
for($i = 1; $i <= 1000; $i++){
    fputs($file, "3 x $i = " . (3 * $i) . PHP_EOL);
}
fclose($file);
