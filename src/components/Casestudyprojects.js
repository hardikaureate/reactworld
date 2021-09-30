import React from 'react'

const CasestudyProjects = ({ projectData }) => {
    { console.log('00000', projectData) }
    return (
        <>
            <section id="two">
                <div className="inner">

                    <div className="box alt">
                        <div className="row gtr-50 gtr-uniform animate__animated animate__zoomIn">
                            {projectData && projectData.map((curElem) => {
                                const { id, image, projectlink } = curElem;
                                return (

                                    <div className="col-4 col-12-xsmall" key={id}>
                                        <span className="image fit projectimg effect_lily">
                                            <a href={projectlink}><img src={image} alt="images" /></a>
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
