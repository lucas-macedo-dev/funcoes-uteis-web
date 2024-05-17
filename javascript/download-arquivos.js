window.montaCSV = function (dados, cabecalho) {
    // Verifica se o cabeçalho foi fornecido e se tem pelo menos um campo
    if (!cabecalho || cabecalho.length === 0) {
        console.error("Cabeçalho não fornecido ou vazio.");
        return;
    }

    // Cria a linha de cabeçalho CSV
    let arquivoCSV = cabecalho.join(";") + "\r\n";

    // Itera sobre os dados e monta as linhas do CSV
    for (let linha of dados) {
        let linhaCSV = cabecalho.map(coluna => {
            let valor = linha[coluna] !== undefined ? linha[coluna] : '';
            // Escapa caracteres especiais, se necessário
            valor = valor.toString().replace(/"/g, '""');
            // Adiciona aspas duplas se o valor contiver ponto e vírgula
            if (valor.indexOf(';') !== -1) {
                valor = '"' + valor + '"';
            }
            return valor;
        }).join(";");

        arquivoCSV += linhaCSV + "\r\n";
    }
    return arquivoCSV;
}

window.download = function (filename, text) {
    // Cria um elemento de âncora para fazer o download
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    // Adiciona o elemento ao DOM, clica nele e remove-o
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Exemplo de uso :

let dados = [
    {
        nome: "João",
        cidade: "São Paulo",
        regiao_interesse: "Sudeste",
        status: "Ativo",
        // Outros campos...
    },
    {
        nome: "Maria",
        cidade: "Rio de Janeiro",
        regiao_interesse: "Sudeste",
        status: "Inativo",
        // Outros campos...
    },
    // Outros objetos de dados...
];

let cabecalho = ["nome", "cidade", "regiao_interesse", "status", /* Outros campos do cabeçalho... */];

let csvContent = window.montaCSV(dados, cabecalho);
window.download("arquivo.csv", csvContent);
