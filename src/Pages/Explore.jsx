import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Explore = () => {


  const [foodName, setFoodName] = useState("")
  const [categories, setCategories] = useState([])
  const [Foods, setFoods] = useState([])

  const getCategories = async () => {
      const response = await fetch('https://themealdb.com/api/json/v1/1/categories.php')
      const data = await response.json()
      setCategories(data.categories)
  }

  const getFood = async () => {
      const response = await fetch('https://themealdb.com/api/json/v1/1/filter.php?a=Italian')
      const data = await response.json()
      setFoods(data.meals)
  }

  const filterCategory = (strCategory) => {
    setFoods(
      data.meals.filter((food) => {
          return food.category === strCategory
      })
    )
  }

  useEffect(() => {
      getCategories();
      getFood();
  }, [])

  
  function handleSubmit(e) {
    e.preventDefault();
    setFoodName("");
  }

  return (
    <section >
      <div>
        <form className='container mx-auto p-3 mb-5 flex flex-col gap-3 items-center justify-center lg:flex-row' onSubmit={handleSubmit}>
          <input className='w-full h-[30px] p-5 border bg-transparent font-san focus:border-lightBrown lg:w-1/2' onChange={(e) => setFoodName(e.target.value)} value={foodName} type="text" placeholder='Food Name' />
          <button className='text-[#0C0B08] text-[16px] leading-[28px] font-bold bg-lightBrown font-san duration-200 hover:bg-white/80 shadow-lg px-[30px] py-[6px]'>Search</button>
        </form>
        <div className='flex flex-wrap gap-5 justify-center'>
          { categories?.length > 0 && categories.map((category) => (
            <div className='p-3 rounded-2xl font-san text-[1.2rem] border-[3px] border-lightBrown duration-150 hover:text-black hover:bg-lightBrown cursor-pointer' key={category?.idCategory}>
              <button onClick={() => filterCategory({category})}>{category?.strCategory}</button>
            </div>
          ))}
        </div>
        <div className='container relative mx-auto p-6'>
            <div className='grid gap-16 grid-cols-fluid items-center'>
              {Foods?.length > 0 && Foods.map((Food) => (
                  // <Link> < SeaFoodCard seaFood={seaFood} /> </Link>
                  <div className='border px-2 py-4 max-w-sm h-[337] rounded-2xl lg:max-w-2xl' key={Food.idMeal}>
                    <img className='object-cover w-full rounded-xl' src={Food.strMealThumb} alt={Food.strMeal} />
                    <h3 className='text-[#AAAAAA] font-san text-[1.2rem] my-4 mx-3'>{Food.strMeal}</h3>
                    <Link className='text-[#0C0B08] mx-3 text-[16px] leading-[28px] font-bold bg-lightBrown font-san duration-200 hover:bg-white/80 shadow-lg px-[30px] py-[6px]'>More Details</Link>
                  </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Explore;