import { ReactNode } from "react";

export interface Item {
    nombre: string,
    tipo: string,
    cantidad: number,
    descripcion: string,
    rareza?: "Común" | "Poco Común" | "Raro" | "Muy Raro" | "Legendario",
    getJSON(): string,
    setCantidad(): void,
    render(): ReactNode,
}

export interface Equipamiento extends Item {
    equipar(): void,
}
