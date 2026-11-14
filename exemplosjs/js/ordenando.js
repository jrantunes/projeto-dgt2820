const swap = (vetor, posicaoA, posicaoB) => {
  [vetor[posicaoA], vetor[posicaoB]] = [vetor[posicaoB], vetor[posicaoA]];
};

const shuffle = (vetor, quantidadeTrocas) => {
  if (vetor.length < 2) return vetor;

  for (let i = 0; i < quantidadeTrocas; i++) {
    const posicaoA = Math.floor(Math.random() * vetor.length);
    const posicaoB = Math.floor(Math.random() * vetor.length);
    swap(vetor, posicaoA, posicaoB);
  }

  return vetor;
};

const bubble_sort = vetor => {
  for (let i = 0; i < vetor.length - 1; i++) {
    let houveTroca = false;

    for (let j = 0; j < vetor.length - i - 1; j++) {
      if (vetor[j] > vetor[j + 1]) {
        swap(vetor, j, j + 1);
        houveTroca = true;
      }
    }

    if (!houveTroca) break;
  }

  return vetor;
};

const selection_sort = vetor => {
  for (let i = 0; i < vetor.length - 1; i++) {
    let menor = i;

    for (let j = i + 1; j < vetor.length; j++) {
      if (vetor[j] < vetor[menor]) menor = j;
    }

    if (menor !== i) swap(vetor, i, menor);
  }

  return vetor;
};

const particionamento = (vetor, inicio, fim, pivot) => {
  let indice = inicio;

  for (let i = inicio; i < fim; i++) {
    if (vetor[i] <= pivot) {
      swap(vetor, indice, i);
      indice++;
    }
  }

  swap(vetor, indice, fim);
  return indice;
};

const quick_sort = (vetor, inicio, fim) => {
  if (inicio < fim) {
    const pivot = vetor[fim];
    const indicePivot = particionamento(vetor, inicio, fim, pivot);
    quick_sort(vetor, inicio, indicePivot - 1);
    quick_sort(vetor, indicePivot + 1, fim);
  }

  return vetor;
};
