import React from 'react'
import Header from '../components/Header'
import SearchForm from '../components/SearchForm'
import DrinkList from '../components/DrinkList'

export default function Home() {
  return (
    <main>
      <SearchForm />
      <DrinkList />
    </main>
  )
}