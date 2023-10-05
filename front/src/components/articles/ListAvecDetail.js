
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {getArticles} from "../../features/articleSlice";
import AfficheDetailArticle from "./AfficheDetailArticle";


const ListDetarticles = () => {
    

    const dispatch = useDispatch();
    
    useEffect(() => {
    
   dispatch(getArticles());
   
    },[dispatch]);

  return (
    <div>
              <AfficheDetailArticle/>
    </div>
  )
}

export default ListDetarticles
