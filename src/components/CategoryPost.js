import React from 'react'
import allblog from '../blogdata/blog.json'
import { useParams } from 'react-router'
import Sidebar from './Sidebar';

const CategoryPost = () => {
    var  slug  = useParams()
    var post = findPostByCataegory(slug);
    console.log('allcat', slug)
    //const { blogCategory, blogTitle, postedOn, author, blogImage, blogText } = post
    // var myvariable = post.blogImage
    // var divStyle = {
    //     backgroundImage: 'url(/' + myvariable + ')',
    // };
    return (
        <div>
            <div id="wrapper">
                <section id="banner" className="style2 blogpage">
                    {/* <section id="banner" className="style2 blogpage" style={divStyle}> */}
                    <div className="inner">
                        <span className="image" >
                        </span>
                        <header className="major">
                            {/* <h1 className="animate__animated animate__fadeInUp">{post.blogCategory}</h1> */}
                            {slug.blogCategory}
                        </header>
                        <div className="content animate__pulse animate__animated">
                            <p>We offer a great place to work for all our associates by providing the best facilities,<br /> rewards & growth programs on a continual basis to support both, your personal and professional growth.</p>
                        </div>
                    </div>
                </section>


                <section id="one">
                    <div class="inner">
                        <div class="row">
                            <div class="col-9 col-12-small">
                                <div className="post-content-view">

                                    {/* <div className="postImage">
                                        <img src={`/${blogImage}`} alt={blogImage} />
                                    </div>
                                    <p className="postCategory">
                                        Category: {blogCategory}
                                    </p> */}
                                    <h1 className="postTitle">
                                        {/* {post.blogTitle} */}
                                    </h1>
                                    {/* <p className="postDate">posted on <span>{postedOn}</span> by {author}</p>
                                    <content class="postContent">
                                        {blogText}
                                    </content> */}
                                </div>
                            </div>
                            <Sidebar />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CategoryPost

// function findPostByCataegory(blogCategory) {
//     return allblog.data.find(myslug => myslug === blogCategory)
//     };


    function findPostByCataegory(blogCategory) {
        return allblog.data.find(myslug => myslug.slug === blogCategory);
    }