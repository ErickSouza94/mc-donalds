export const removeCpfPontuation = (cpf: string) => {
  return cpf.replace(/[\.\-]/g, "")
};

export const isValidCpf = (cpf: string): boolean => {
  // Remove todos os caracteres não numéricos do CPF
  cpf = cpf.replace(/[^\d]+/g, "");

  // Verifica se o CPF tem 11 dígitos e se não é uma sequência de dígitos repetidos
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  let soma = 0;
  let resto;

  // Calcula o primeiro dígito verificador
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;

  // Ajusta o valor do resto se necessário
  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  // Verifica se o primeiro dígito verificador está correto
  if (resto !== parseInt(cpf.substring(9, 10))) {
    return false;
  }

  soma = 0;

  // Calcula o segundo dígito verificador
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;

  // Ajusta o valor do resto se necessário
  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  // Verifica se o segundo dígito verificador está correto
  if (resto !== parseInt(cpf.substring(10, 11))) {
    return false;
  }

  // Se todos os testes passarem, o CPF é considerado válido
  return true;
};
