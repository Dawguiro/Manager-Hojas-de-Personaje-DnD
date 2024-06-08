import React from 'react'
import "./RecursoItem.css"
import { Item } from '../items'

type Props = {
  nombre: string
  tipo: string
  cantidad: number
  descripcion: string
}

class RecursoItem extends React.Component implements Item {
  nombre: string
  tipo: string = "Recurso"
  cantidad: number
  descripcion: string
  constructor(props: Props) {
    super(props)
    this.nombre = props.nombre
    this.cantidad = props.cantidad
    this.descripcion = props.descripcion
    this.state = {cantidad: this.cantidad}
  }

  render() {
    return (
      <>
      
      </>
    )
  }

  getJSON(): string {
    throw new Error('Method not implemented.')
  }
  setCantidad(): void {
    throw new Error('Method not implemented.')
  }

}

export default RecursoItem
