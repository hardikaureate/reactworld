import React from 'react'
import { Link } from 'react-router-dom'
import allblog from '../blogdata/blog.json'

const AllPostListSidebar = () => {

    return (
        <>
            <div className="blogcard">
                <h3 className="biotitle">Recent Posts</h3>
                {
                    allblog.data.slice(2, 8).map((items, i) => {
                        return (
                            <div className="allpostlist">
                                <div className="rpimage">
                                    <img src={`/${items.blogImage}`} alt="img" />
                                </div>
                                <div className="titledate">
                                    <p className="rptitle"><Link to={`/post/${items.slug}`}>{items.blogTitle}</Link></p>
                                    <p className="rpdate">{items.postedOn}</p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </>

    )
}

export default AllPostListSidebar