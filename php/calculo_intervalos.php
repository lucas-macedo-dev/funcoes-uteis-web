<?php 
function calcularIntervalosDisponiveis($dia, $inicio, $fim, $tamanhoIntervalo) {
    $intervalos = [];
    
    // Converter horários para objetos DateTime
    $inicio = DateTime::createFromFormat('H:i', $inicio);
    $fim = DateTime::createFromFormat('H:i', $fim);
    
    // Calcular a duração total em minutos
    $duracaoTotal = $fim->diff($inicio)->format('%H:%I');
    $duracaoTotalMinutos = $inicio->diff($fim)->h * 60 + $inicio->diff($fim)->i;
    
    // Calcular a quantidade de intervalos disponíveis
    $quantidadeIntervalos = floor($duracaoTotalMinutos / $tamanhoIntervalo);
    
    // Calcular os horários de início de cada intervalo disponível
    $horaAtual = clone $inicio;
    for ($i = 0; $i < $quantidadeIntervalos; $i++) {
        $intervalos[] = $horaAtual->format('H:i');
        $horaAtual->add(new DateInterval('PT' . $tamanhoIntervalo . 'M'));
    }
    
    return [
        'quantidade' => $quantidadeIntervalos,
        'intervalos' => $intervalos
    ];
}

// Exemplo de uso
$dia = '2024-02-15';
$inicio = '08:00';
$fim = '12:00';
$tamanhoIntervalo = 30; // em minutos

$resultado = calcularIntervalosDisponiveis($dia, $inicio, $fim, $tamanhoIntervalo);

echo "Quantidade de intervalos disponíveis: " . $resultado['quantidade'] . "\n";
echo "Horários de início dos intervalos disponíveis: " . implode(", ", $resultado['intervalos']);
?>
