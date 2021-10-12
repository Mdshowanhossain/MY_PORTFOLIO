import React, { useEffect, useState } from 'react';
import './PCard.css';
import projectsInfo from '../ProjectsData/ProjectsData';

const PCard = () => {

    const [searchProject, setSearchProject] = useState('')
    const [projectsData, setProjectsData] = useState(projectsInfo)




    useEffect(() => {
        if (searchProject === '') return;

        setProjectsData(() => {
            projectsInfo.filter((item) => item.name.toLowerCase().match(searchProject.toLowerCase()));
            // projectsInfo.filter((item) => { item.name.toLocaleLowerCase().match(searchProject.toLocaleLowerCase()) })
        })

    }, [searchProject])


    const handleChange = (e) => {
        e.preventDefault();
        setSearchProject(e.target.value);

        if (!e.target.value.length > 0) {
            setProjectsData(projectsInfo);
        }

    }




    return (
        <div className="t_p_card">
            <div className="heading">
                <div className="p_title">
                    <h3>some of my recent works</h3>
                    <h1>PROJECTS</h1>
                </div>
                <div className="p_search">
                    <form action="">
                        <input value={searchProject} onChange={handleChange} className="s_project" type="text" placeholder="Search...." />
                        <i class="fas fa-search"></i>
                    </form>
                </div>

                {searchProject ? '' :


                    <div className="p_card_wrapper">
                        {
                            projectsData.map((item) => {
                                return <div className="all_p_card">
                                    <img className="p_card_img" src={item.img} alt="" />
                                    <div className="p_card_desc">
                                        <h1 className="p_">{item.name}</h1>
                                        <p>{item.desc}</p>
                                        <div className="p_btn">
                                            <button>CODE LINK</button>
                                            <button>LIVE LINK</button>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                }
                {/* {searchProject ? '' : */}


                {/* <div className="p_card_wrapper">
                    {
                        projectsData.map((item) => console.log(item))
                    }
                </div> */}
                {/* } */}

            </div>
        </div>
    );
};


export default PCard;