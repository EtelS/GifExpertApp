import React, { useState } from 'react'
import {AddCategory, GifGrid} from './components'

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  
  const onAddCategory= (newCategory) =>{
    if(categories.includes(newCategory)){
      alert('Ya existe esa categoria')
      return;
    } 
         setCategories([newCategory, ...categories])
  }

  return (
    <>
        <h1>Gif Expert App</h1>
        <AddCategory 
          onNewCategory= { onAddCategory}
          />
    
        {categories.map((category) => (
                  <GifGrid 
                    key={category}
                    category={category} />
        ) )}
    </>
  )
}
