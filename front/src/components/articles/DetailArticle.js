import React from 'react'
import {useSelector} from "react-redux"

const DetailArticle = () => {

   
    const {article} = useSelector((state) =>state.storearticles);

   

  return (
    <div>
      {article.designation}
    </div>
  )
}

export default DetailArticle
