import {Link,NavLink,Outlet} from 'react-router-dom'

export default function Header(){
    return(
        <div className='root-layout'>
        <header>
            <Link to="/" >Home</Link>
            <NavLink to="/about" >About</NavLink>
            <Link to="/NewPost" >New Post</Link>    
        </header>
        <Outlet />

        </div>
    )
}