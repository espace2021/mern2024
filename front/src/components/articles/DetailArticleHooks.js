import React from 'react'


const DetailArticle = ({article}) => {
console.log(article)
   
   return (
    <div>
        <div>{article.marque}</div>
      
      <img src={article.imageart} alt="" width="200"/>
      <div>{article.designation}</div>
      
    </div>
  )
}

export default DetailArticle
