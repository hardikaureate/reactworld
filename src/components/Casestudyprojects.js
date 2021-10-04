import React from 'react'
import { Link } from "react-router-dom"

const CasestudyProjects = ({ projectData }) => {

    return (
        <>
            <section id="two">
                <div className="inner">

                    <div className="box alt">
                        <div className="row gtr-50 gtr-uniform animate__animated animate__zoomIn">
                            {projectData && projectData.map((curElem) => {
                                const { id, image, projectlink, name } = curElem;
                                return (

                                    <div className="col-4 col-12-xsmall procard" key={id}>
                                        <span className="image fit projectimg effect_lily">
                                            <a target="_blank" href={projectlink}><img src={image} alt="images" />
                                                <h4 classNam="projectName">{name}</h4>
                                            </a>
                                        </span>

                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CasestudyProjects
