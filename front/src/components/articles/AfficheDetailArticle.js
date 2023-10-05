import * as React from 'react';
//import ReactLoading from 'react-loading';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import {useDispatch,useSelector} from "react-redux"

import DetailArticle from './DetailArticle';

import {findArticleByID} from "../../features/articleSlice";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const AfficheDetailArticle = () => {

  const dispatch = useDispatch();

    const {articles} = useSelector((state) =>state.storearticles);

    const [setId]=React.useState("")

  return (
    <div>
     
       { articles && articles.length>0 ? <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       
          <Grid item xs={2} sm={4} md={4} >
            <Item>
                {
                    articles.map((article)=>{ 
                        return (
                            <p onClick={()=>{setId(article._id);dispatch(findArticleByID(article._id))}}> {article.designation}</p>
                        )
                    })
                }
            </Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4} >
            <Item>
            <DetailArticle />
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
