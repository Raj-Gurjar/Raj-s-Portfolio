import React, { useState, useEffect } from 'react';
import './ProjectCom.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProjData from './Proj-Data';

const ProjectCom = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Set the animation duration to 1200ms (1.2 seconds)
        });
    }, []);

    const [items, setItems] = useState(ProjData);
    const [activeFilter, setActiveFilter] = useState('All');

    const filterItem = (categItem) => {
        const updatedItems = categItem === 'All' ? ProjData : ProjData.filter((curElem) => curElem.category === categItem);
        setItems(updatedItems);
        setActiveFilter(categItem);
    };

    const [expandedCardId, setExpandedCardId] = useState(null);
    const toggleDetails = (cardId) => {
        setExpandedCardId(cardId === expandedCardId ? null : cardId);
    };

    return (
        <section className="port_cls section_padding">
            <div className="container">
                <div className="row justify_content_cntr">
                    <div className="section_title txt_align">
                        <h3 className="main_title">Projects</h3>
                        <h5 className="sub_title">Works I Did</h5>
                        <div className="line" />
                    </div>
                </div>

                <div className="row justify_content_cntr">
                    <div className="port_filter" data-aos="fade-up">
                        {['All', 'DSA', 'WebDev', 'ML', 'Others'].map((category) => (
                            <button
                                key={category}
                                className={activeFilter === category ? 'activeTab' : ''}
                                onClick={() => filterItem(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="row justify_content_cntr">
                    {items.map((elem) => {
                        const {
                            id,
                            title,
                            subTitle,
                            image,
                            category,
                            discription,
                            liveLink,
                            gitLink,
                        } = elem;

                        const isExpanded = expandedCardId === id;

                        return (
                            <div className="card" key={id} data-aos="fade-right">
                                <div className="imgBox">
                                    <div className="proj-title">
                                        <h4>{title}</h4>
                                        <h6>
                                            {subTitle}

                                        </h6>
                                        <span>
                                            <button onClick={() => toggleDetails(id)} className='proj_info_btn'>
                                                {isExpanded ? 'Hide Info' : 'More Info'}
                                            </button>
                                        </span>
                                    </div>
                                    <img src={image} alt="proj-img" />
                                    <div className="btn-box">
                                        <button>
                                            <a href={gitLink}>View Code</a>
                                        </button>
                                        <button>
                                            <a href={liveLink}>Live Demo</a>
                                        </button>
                                    </div>
                                </div>
                                <div className={`details ${isExpanded ? 'show' : ''}`}>
                                    <p>{discription}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProjectCom;
