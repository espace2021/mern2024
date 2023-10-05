

import {  useSelector } from "react-redux";
import {Link} from 'react-router-dom';
import {Grid,Button} from '@mui/material';

const Home = () => {
    
   
    const {user} = useSelector((state) => state.auth);
    
    
  return (
     
      <Grid container justifyContent="flex-end">
              <Grid item>
               <Button><Link to="/register" variant="body2">
                   Sign up
                </Link>
                </Button> 
                <Button>
                {user ? <Link to="/logout" variant="body2">
                LogOut
                </Link>
               : <Link to="/login" variant="body2">
               Sign in
                </Link>
               }
                </Button>
              </Grid>
            </Grid>

  )
}

export default Home