import { Nivel, Tipo } from "./enums";

interface Projeto {
  id: number;
  nome: string;
  descricao: string;
  imagens: string[];
  tipo: Tipo;
  nivel: Nivel;
  repositorio: string;
  destaque: boolean;
}

export type {
  Projeto,
}