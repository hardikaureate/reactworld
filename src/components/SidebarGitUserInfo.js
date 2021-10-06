import React, { useState, useEffect } from 'react'

const SidebarGitUserInfo = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users/hardikaureate')
            setLoading(false)
            setUsers(await response.json())
        } catch (error) {
            setLoading(false)
            console.log("my error is " + error)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    if (loading) return <div><div class="loading">Loading&#8230;</div></div>

    return (
        <>
            <section className="github--profile">
                <h3 className="gitblocktitle">GitHub Profiles</h3>
                <div className="github--profile__info">
                    <div className="gitImage">
                        <img src={users.avatar_url} alt="img" />
                    </div>
                    <div className="gitName">
                        <h3><a href={users.html_url}>{users.name}</a></h3>
                        <h4>{users.bio}</h4>
                    </div>
                </div>
                <div className="github--profile__state">
                    <ul>
                        <li><a href={users.html_url}><p>23</p><span>Followers</span></a></li>
                        <li><a href={users.html_url}><p>75</p><span>Repositoriy</span></a></li>
                        <li><a href={users.html_url}><p>43</p><span>Following</span></a></li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default SidebarGitUserInfo