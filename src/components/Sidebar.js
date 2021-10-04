import React from 'react'
import AllPostListSidebar from './AllPostListSidebar'
import SidebarAuthorInfo from './SidebarAuthorInfo'
import SidebarSocialMedia from './SidebarSocialMedia'

const Sidebar = () => {
    return (
        <>
            <div className="col-3 col-12-small biosection">
                <SidebarAuthorInfo />
                <AllPostListSidebar />
                <SidebarSocialMedia />
            </div>
        </>
    )
}

export default Sidebar
