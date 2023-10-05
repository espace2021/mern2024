
import {Routes,Route} from "react-router-dom"
import Listarticles from './components/articles/Listarticles';
import Insertarticle from './components/articles/Insertarticle';
import Editarticle from './components/articles/Editarticle';
import Listcategories from './components/categories/Listcategories';
import Insertcategorie from './components/categories/Insertcategorie';
import Editcategorie from './components/categories/Editcategorie';
import Listscategories from './components/scategories/Listscategories';
import Insertscategorie from './components/scategories/Insertscategorie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Editscategorie from './components/scategories/Editscategorie';
import Login from "./components/admin/Login"
import Logout from "./components/admin/Logout"
import Register from "./components/admin/Register"
import Dashboard from "./components/admin/dashboard";


import  Menu  from "./components/Menu";
import ProtectedRoutes from "./components/admin/ProtectedRoutes";
import ProtectedRoutes2 from "./components/admin/ProtectedRoutes2";

import ListarticlesDetail from './components/articles/ListAvecDetail';

import ListarticlesDetailHooks from './components/articles/AfficheDetailArticleHooks';

import ForgotPassword from './components/admin/ForgotPassword'
import ResetPassword from './components/admin/ResetPassword'

import Espace from "./components/Espace"

import CarouselHome from "./components/CarouselHome"

function App() {
  
  return (
    <>
    
<Routes>

<Route element={<ProtectedRoutes/>}>
    <Route path="/dashboard"  element={<Dashboard/>}/>     
    <Route path="/articles"  element={<Listarticles/>}/>   
    <Route path="/articles/add" element={<Insertarticle/>}/>
    <Route path="/article/edit/:id" element={<Editarticle/>}/>
    <Route path="/categories"  element={<Listcategories/>}/>
    <Route path="/categories/add" element={<Insertcategorie/>}/>
    <Route path="/categories/edit/:id" element={<Editcategorie/>}/>
    <Route path="/scategories"  element={<Listscategories/>}/>
    <Route path="/scategories/add" element={<Insertscategorie/>}/>
    <Route path="/scategories/edit/:id" element={<Editscategorie/>}/>
    <Route path="/listarticlesDetail"  element={<ListarticlesDetail/>}/> 
    <Route path="/listarticlesDetailHooks"  element={<ListarticlesDetailHooks/>}/>
     
</Route>


<Route element={<ProtectedRoutes2/>}>
<Route path="/espace" element={<Espace/>}/>
</Route>

<Route path="/menu"  element={<Menu/>}/>
<Route path="/"  element={<CarouselHome/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/logout" element={<Logout/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="*" element={<p>Page Not Found: 404!</p>} />
<Route path="/forgot-password" element={<ForgotPassword />}></Route>
<Route path="/reset_password/:id/:token" element={<ResetPassword />}></Route>



</Routes>
</>
  );
}

export default App;
