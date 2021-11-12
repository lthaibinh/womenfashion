import React, { useEffect} from "react";
import Header from './General/Header'
import Footer from './General/Footer'
import Home from "./Home/Home";
import Products from "./Products/Products";
import About from "./AboutUs/About";
import MailUs from "./General/MailUs" ;

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
} from 'react-router-dom';
import Cart from "./Cart/Cart";
import ProductsList from "./Products/ProductsList";
function App() {

    const BlogPosts = {
        '1': {
            title: 'First Blog Post',
            description: 'Lorem ipsum dolor sit amet, consectetur adip.'
        },
        '2': {
            title: 'Second Blog Post',
            description: 'Hello React Router v6'
        }
    };
   
    function Posts() {
        return (
            <div style={{ padding: 20 }}>
                <h2>Blog</h2>
                {/* render any matching child */}
                <Outlet />
            </div>
        );
    }
    function PostLists() {
        return (
            <ul>
                {Object.entries(BlogPosts).map(([slug, { title }]) => (
                    <li key={slug}>
                        <Link to={`/posts/${slug}`}>
                            <h3>{title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }
    function Post() {
        const { slug } = useParams();
        const post = BlogPosts[slug];

        const { title, description } = post;

        return (
            <div style={{ padding: 20 }}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        );
    }
    let ProductType = () => {
        const { slug } = useParams();
        return(
            <div>
                {slug}
            </div>
        )
    }
    return (
        <Router>
        
            <Header></Header>
          
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="cart" element={<Cart />} />
                <Route path="posts" element={<Posts />}>
                    <Route path="" element={<PostLists />} />
                    <Route path=":slug" element={<ProductType />} />
                </Route>
                <Route path="products" element={<Products />}>
                    <Route path="" element={<ProductsList />} />
                    <Route path=":slug" element={<ProductsList />} />
                </Route>
                <Route path="/mail" element={<MailUs />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <h1 style={{textAlign:"center"}}>There's nothing here!</h1>
                        </main>
                    }
                />
            </Routes>


            <Footer></Footer>

        </Router>
    )

}
export default App;



