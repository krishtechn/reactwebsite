import React from 'react'
import Card from "./Card";

const Cards = () => {
  return (
      
      <div className="flex justify-center items-center">
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 mt-5'>
    <Card image="./logo.jfif" title="how to learn html" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam tenetur magnam eligendi similique nobis id perspiciatis quod nisi nostrum vitae ad repellat in assumenda ex, atque a qui iusto mollitia." btn="Learn html"/>
    <Card image="./logo.jfif" title="how to learn css" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam tenetur magnam eligendi similique nobis id perspiciatis quod nisi nostrum vitae ad repellat in assumenda ex, atque a qui iusto mollitia." btn="Learn css"/>
    <Card image="./logo.jfif" title="how to learn js" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam tenetur magnam eligendi similique nobis id perspiciatis quod nisi nostrum vitae ad repellat in assumenda ex, atque a qui iusto mollitia." btn="Learn js"/>
    <Card image="./logo.jfif" title="how to learn php" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam tenetur magnam eligendi similique nobis id perspiciatis quod nisi nostrum vitae ad repellat in assumenda ex, atque a qui iusto mollitia." btn="Learn php"/>
    <Card image="./logo.jfif" title="how to learn android" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam tenetur magnam eligendi similique nobis id perspiciatis quod nisi nostrum vitae ad repellat in assumenda ex, atque a qui iusto mollitia." btn="Learn android"/>
    <Card image="./logo.jfif" title="how to learn react" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam tenetur magnam eligendi similique nobis id perspiciatis quod nisi nostrum vitae ad repellat in assumenda ex, atque a qui iusto mollitia." btn="Learn react"/>
    <Card image="./logo.jfif" title="how to learn react-native" desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam tenetur magnam eligendi similique nobis id perspiciatis quod nisi nostrum vitae ad repellat in assumenda ex, atque a qui iusto mollitia." btn="Learn react"/>
    </div>
    </div>
  )
}

export default Cards