function encontrarValor(objeto, chaveProcurada) {
    for (const chave in objeto) {
        if (objeto.hasOwnProperty(chave)) {
            const valor = objeto[chave];

            if (chave === chaveProcurada) {
                return valor;
            }

            if (typeof valor === 'object') {
                const resultadoRecursivo = encontrarValor(valor, chaveProcurada);
                if (resultadoRecursivo !== undefined) {
                    return resultadoRecursivo;
                }
            }
        }
    }

    return undefined; // Retorna undefined se a chave não for encontrada
}

// Exemplo de uso:
const jsonExemplo = {
    "nome": "John",
    "idade": 25,
    "detalhes": {
        "endereco": {
            "cidade": "ExemploCity",
            "pais": "ExemploCountry"
        },
        "hobbies": ["esportes", "leitura"]
    }
};

const chaveProcurada = "cidade";
const valorEncontrado = encontrarValor(jsonExemplo, chaveProcurada);

console.log(`O valor da chave '${chaveProcurada}' é: ${valorEncontrado}`);