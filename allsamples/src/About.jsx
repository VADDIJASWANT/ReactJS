import {Link,Outlet} from 'react-router-dom'
export default function About(){
    return(

        <main>
            <Link to='PostPage'>PostPage</Link>
            <Link to='Missing'>Missing</Link>
            <h1>About</h1>
            <div>
                <Outlet />
            </div>
        </main>
    )
}