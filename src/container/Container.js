import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Comments from '../components/Comments'
import List from '../components/crud/List'
import Footer from '../components/Footer'
import MainCard from '../components/MainCard'
import { listProductsAsync } from '../redux/actions/actionProducts'


const Container = () => {


  const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProductsAsync())
     }, [dispatch])

  return (
    <div>
        <MainCard/>
        <List/>
        <Comments/>
        <Footer/>
    </div>
  )
}

export default Container