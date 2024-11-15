import { writable } from "svelte/store";

export const tipo = writable('SUCESSO')
export const visivel = writable(false)
export const texto = writable('')


export const toast = (type,visible,text) => {
    tipo.set(type)
    visivel.set(visible)
    texto.set(text) 
}