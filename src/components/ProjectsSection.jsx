import React from 'react'
import ProjectsCard from './ProjectsCard'

const ProjectsSection = () => {

    const ProjectsData = [
        {
            id: 1,
            title: "Abidin Car Dealer Promotion Website",
            description: "Create and deploy a dynamic responsive website for car dealer promotional needs using Laravel and Bootstrap.",
            image: "/images/porto-1.png",
            tag: ["All"],
            previewUrl: "",
            gitUrl: "https://github.com/arthurmorgan2/promotion-mitsubishi"
        },
        {
            id: 2,
            title: "Balai PPA DIY Website",
            description: "Create and deploy a dynamic responsive website to share activities and events about Balai PPA DIY and visitor administration.",
            image: "/images/porto-2.png",
            tag: ["All"],
            previewUrl: "",
            gitUrl: "https://github.com/arthurmorgan2/web-admin.git"
        },
        {
            id: 3,
            title: "BNN Klinik Sleman Website",
            description: "Create and deploy a dynamic responsive website to share activities and events about BNN Klinik Sleman and visitor administration.",
            image: "/images/porto-3.png",
            tag: ["All"],
            previewUrl: "",
            gitUrl: "https://github.com/arthurmorgan2/bnn-web.git"
        },
    ]

    return (
        <>
            <div id='projects' className='text-center text-white md:text-2xl text-xl font-semibold mx-auto my-4 md:my-8'>My Projects</div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-12 gap-8">
                {ProjectsData.map((project) =>
                    <ProjectsCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                )}

            </div>
        </>
    )
}

export default ProjectsSection