import React from 'react'
import { Link } from 'react-router-dom'
import allblog from '../blogdata/blog.json'

const FooterBlog = () => {

    return (
        <>
            <div className="blogList">
                <h4>Latest Posts</h4>
                <div className="footerBlogsList">
                    {
                        allblog.data.slice(2, 8).map((items, i) => {
                            return (

                                <div className="footerallpostlist">
                                    <div className="footertitledate">
                                        <div className="footerrptitle"><Link to={`/post/${items.slug}`}>{items.blogTitle}</Link></div>
                                        <div className="footerrpdate">{items.postedOn}</div>
                                    </div>
                                </div>

                            )
                        })}
                </div>  
            </div>
        </>

    )
}

export default FooterBlog