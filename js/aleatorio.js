const nomes = [
    "Steve", "Alex", "Creeper", "Enderman", "Herobrine", "Zombie", "Skeleton",
    "Villager", "Diamond", "Emerald", "Notch", "Redstone", "Alex", "Steve"
];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
