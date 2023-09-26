<?php

//Ler uma linha de um arquivo de cada vez

/*
 * O segundo parâmetro da função fopen indica o que queremos fazer com o arquivo
 * r - read | w - write | a - append
*/
$file = fopen('dados.txt', 'r');
while (!feof($file)){
    echo fgets($file) . '<br>';
}
fclose($file);

// ou
$file = fopen('dados.txt', 'r');
while (($linha = fgets($file)) !== false){
    echo $linha . '<br>';
}
fclose($file);

