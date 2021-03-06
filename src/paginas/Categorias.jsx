import React, { useEffect, useState } from 'react';
import { Link, Switch, useParams } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCaregorias';
import ListaPost from '../components/ListaPost';
import { busca } from '../api/api';
import SubCategoria from './SubCategoria';

const Categoria = () => {

    const { id } = useParams()
    const { url, path } = useRouteMatch()
    const [subCategorias, setSubCategoria] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategoria(categoria.subCategorias)
        })
    }, [id])

    return (
        <>
            <div className='container'>
                <h2 className='titulo-pagina'>Pet Noticias</h2>
            </div>

            <ListaCategorias />

            <ul className="lista-categorias container flex">
                {
                    subCategorias.map((subcategoria) => {
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    })


                }
            </ul>


            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>

                <Route path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
            </Switch>
        </>
    )
}

export default Categoria;