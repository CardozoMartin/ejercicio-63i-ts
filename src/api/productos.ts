import axios from "axios"
import { Producto } from "../interface/productoInt";

export const getProductosFn = async (): Promise<Producto[]> => {
    const res = await axios.get<Producto[]>("http://localhost:3000/productos")

    return res.data;
}