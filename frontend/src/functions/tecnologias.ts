import { Tecnologia } from "@core"
import { httpGet } from "../api/http"

export async function obterTecnologias(){
  const tecnologias: Tecnologia[] = await httpGet('/tecnologias')
  
  return {
    todas: tecnologias, 
    get destaques() {
      return tecnologias.filter(tecnologia => tecnologia.destaque)
    }
   }
}