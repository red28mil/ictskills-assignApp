import React from 'react'
import Drink from './Drink'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function DrinkList() {
  const { drinks, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
if (drinks.length < 1) {
    return (
      <h2 className='section-title'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>drink</h2>
      <div className='drinks-center'>
        {drinks.map((item) => {
          return <Drink key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
