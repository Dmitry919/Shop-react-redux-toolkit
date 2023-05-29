import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apiSlice'
import { ROUTES } from '../../utils/routes'
import Product from './Product'
import Products from './Products'
import { useDispatch, useSelector } from 'react-redux'
import { getRelatedProducts } from '../../features/products/productsSlice'


const SingleProduct = () => {
  const dispatch = useDispatch()
  const { related, list } = useSelector(({ products }) => products)

  const { id } = useParams()
  const navigate = useNavigate()

  const { data, isLoading, isSuccess, isFetching } = useGetProductQuery({ id })

  useEffect(() => {
    if (!isLoading && !isFetching && !isSuccess) {
      navigate(ROUTES.HOME)
    }
  }, [isLoading, isSuccess, isFetching, navigate] )

  useEffect(() => {
    if(!data || !list.length) return

    dispatch(getRelatedProducts(data.category.id))
    
  }, [data, dispatch, list.length])

  return  !data 
    ? ( 
        <section className="preloader">Loading...</section>
      )
    : (
       <>
        <Product {...data}/>
        <Products products={related} amount={5} title="Related products"/>
      </>
      )
}

export default SingleProduct