import * as React from 'react';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import DetailArticle from './DetailArticleHooks';

import {fetchArticles,fetchArticleById} from "../../services/ArticleService"


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const AfficheDetailArticle = () => {

  const [articles,setArticles]=React.useState("")
  const [article,setArticle]=React.useState("")
    
    React.useEffect(() => {
    
     
        fetchArticles().then((res)=>{
          setArticles(res.data) ;
        })
        
       
    },[]);
    
const handleClick=(_id)=>{
  
  fetchArticleById(_id).then((res)=>{
    setArticle(res.data)
  })

}

  return (
    <div>
     
       { articles && articles.length>0 ? <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       
          <Grid item xs={2} sm={4} md={4} >
            <Item>
                {
                    articles.map((article,index)=>{ 
                        return (
                            <p onClick={()=>handleClick(article._id)} key={index}> {article.designation}</p>
                        )
                    })
                }
            </Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item>
            <DetailArticle article={article}/>
            </Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item>
                Espace vide pour le moment
            </Item>
          </Grid>
      </Grid>
    </Box>
:null}
    </div>
  )
}

export default AfficheDetailArticle
