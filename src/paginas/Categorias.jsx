import React, { useEffect, useState }  from 'react';
import { useParams } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCaregorias';
import ListaPost from '../components/ListaPost';
import { busca } from '../api/api';

const Categoria = () =>{

    const {id} = useParams()
    const { path } = useRouteMatch()
    const [subCategorias, setSubCategoria] = useState([])

    useEffect(()=>{
        busca(`/categorias/${id}`,(categoria)=>{
            setSubCategoria(categoria.subCategorias)
        })
    }, [id])

    return(
        <>
            <div className='container'>
                <h2 className='titulo-pagina'>Pet Noticias</h2>
            </div>

            <ListaCategorias/>
            <Route exact path={`${path}/`}>
            <ListaPost url={`/posts?categoria=${id}`}/>
            </Route>
        </>
    )
}

export default Categoria;