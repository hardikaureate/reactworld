import React from 'react'
import { Link } from 'react-router-dom'
import allblog from '../blogdata/blog.json'


const PostGrid = () => {
    var path = 'images/blogimage/blogbg.jpeg'
    var divStyle = {
        backgroundImage: 'url(/' + path + ')',
        backgroundPosition: 'bottom'
    };
    return (
        <>
            <div id="wrapper">
                <section id="banner" className="style2 blogpage" style={divStyle}>
                    <div className="inner">
                        <header className="major">
                            <h1 className="animate__animated animate__fadeInUp">Blog</h1>
                        </header>
                        <div className="content animate__pulse animate__animated">
                            <p>We offer a great place to work for all our associates by providing the best facilities,<br /> rewards & growth programs on a continual basis to support both, your personal and professional growth.</p>
                        </div>
                    </div>
                </section>

                

                <section id="two">
                    <div className="inner">
                        <div class="box alt">
                            <div class="row gtr-50 gtr-uniform moblay">
                                {
                                    allblog.data.map((items, i) => {
                                        return (
                                            <>
                                                <div class="col-4 blog-post mobblog">
                                                    <div class="header-thumbnail">
                                                        <Link class="blog__img" to={`post/${items.slug}`}>
                                                            <img className="blogpageimage" src={items.blogImage} />
                                                        </Link>
                                                    </div>
                                                    <div class="entry-header blog__content">
                                                        <div class="date_title">
                                                            <div class="post-meta mt-15">
                                                                {/* <a href={`post/${items.slug}`}><img src={items.blogImage} alt="blogs" /></a> */}
                                                                <div className="catlogo gridlogo">HD</div>
                                                            </div>
                                                            <div class="post_date_title">
                                                                <Link to={`post/${items.slug}`}>{items.blogCategory}</Link>
                                                                <div class="inner_postmeta">
                                                                    <span class="date_val">{items.postedOn}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Link to={`post/${items.slug}`}><h2 class="blog-title mt-15">{items.blogTitle}</h2></Link>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default PostGrid
