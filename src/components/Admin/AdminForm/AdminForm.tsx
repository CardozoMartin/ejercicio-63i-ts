import React from 'react'
import { useForm } from 'react-hook-form'
import { Producto } from "../../../interface/productoInt"
import Input from '../../../helpers/Input'

type Props = {}

const AdminForm = (props: Props) => {
  //RHF----------------------------------------
  const { 
    register, 
    handleSubmit: onSubmitRHF,
    formState: { errors },
    setValue,
    reset,
  } = useForm<Producto>()

  //Handlers----------------------------------------------
  function handleSubmit(data: Producto): void {
    console.log(data)
  }

  return (
    <section>
      <form className='card p-3' onSubmit={onSubmitRHF(handleSubmit)}>
        <Input 
          register={register}
          options={{
            required: "El nombre es requerido",
            minLength: {
              value: 4,
              message: "El nombre debe tener al menos 4 caracteres"
            },
            maxLength: {
              value: 60,
              message: "El nombre no puede tener más de 60 caracteres"
            }
          }}
          label='Nombre'
          name='nombre'
          placeholder='Ingrese el nombre'
          error={!!errors.nombre}
        />

        <Input 
          register={register}
          options={{
            required: "La imagen es requerida",
            minLength: {
              value: 4,
              message: "La URL de la imagen debe tener al menos 4 caracteres"
            },
            maxLength: {
              value: 60,
              message: "La URL de la imagen no puede tener más de 60 caracteres"
            }
          }}
          label='Imagen'
          name='imagen'
          placeholder='Ingrese la URL de la imagen'
          error={!!errors.imagen}
        />

        <Input 
          register={register}
          options={{
            required: "La descripción es requerida",
            minLength: {
              value: 4,
              message: "La descripción debe tener al menos 4 caracteres"
            },
            maxLength: {
              value: 60,
              message: "La descripción no puede tener más de 60 caracteres"
            }
          }}
          label='Descripción'
          name='descripcion'
          placeholder='Ingrese la descripción'
          error={!!errors.descripcion}
        />

        <Input 
          register={register}
          options={{
            required: "El precio es requerido",
            min: {
              value: 0,
              message: "El precio no puede ser negativo"
            }
          }}
          type="number"
          label='Precio'
          name='precio'
          placeholder='Ingrese el precio'
          error={!!errors.precio}
        />

        <button type="submit" className="btn btn-primary mt-3">
          Guardar Producto
        </button>
      </form>
    </section>
  )
}

export default AdminForm