function podePegarEmprestimo(idade, renda, parcela) {
    return idade >= 21 && idade <= 65 && renda >= 2500 && parcela <= renda * 0.3
}

console.log(podePegarEmprestimo(28, 3000, 900));