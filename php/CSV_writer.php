<?php
$file = fopen('dados.csv', 'w');

// headers
$header = ['Coluna A', 'Coluna B', 'Coluna C'];
fputcsv($file, $header);

// rows
for ($i = 1; $i <= 100; $i++){
    $linha = [rand(100, 999), rand(100, 999), rand(100, 999)];
    fputcsv($file, $linha);
}
fclose($file);
