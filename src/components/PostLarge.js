import React from 'react'
import { Link } from 'react-router-dom'
import allblog from '../blogdata/blog.json'
import Sidebar from './Sidebar';

const PostLarge = () => {
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

                <section id="one">
                    <div class="inner">
                        <div class="row">
                            <div class="col-9 col-12-small">
                                {
                                    allblog.data.map((items, i) => {
                                        return (
                                            <>
                                                <div className="blogpostList">
                                                    <div className="mainblogimage">
                                                        <Link to={`post/${items.slug}`}>
                                                            <img src={items.blogImage} alt="img" srcset="" />
                                                        </Link>
                                                    </div>
                                                    <div className="blogmetainfo">
                                                        <Link to={`post/${items.slug}`}><h3>{items.blogTitle}</h3></Link>
                                                        <div className="blogcat">
                                                            <div className="catlogo">HD</div>
                                                            <div className="catname">{items.blogCategory}</div>
                                                            <div className="blogdate">{items.postedOn}</div>
                                                        </div>
                                                    </div>
                                                    <div className="blogshortcont">
                                                        <content class="" dangerouslySetInnerHTML={{ __html: items.blogText }}></content>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <Sidebar />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default PostLarge
