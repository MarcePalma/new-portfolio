import React, { useRef, useEffect, useState } from 'react';
import { ProjectShowcaseProps } from '@/types/types';

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ title, images, description, technologies, duration }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const previousScrollYRef = useRef(0);


    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        const onWheel = (event: WheelEvent) => {
            if (scrollContainer && event.deltaY !== 0) {
                // Verificar la velocidad del scroll
                const currentScrollY = window.scrollY || window.pageYOffset;
                const deltaScrollY = currentScrollY - previousScrollYRef.current;
                const isFastScroll = Math.abs(deltaScrollY) > 50;

                // Si el scroll es rápido, permitir el desplazamiento normal de la página
                if (isFastScroll) return;

                // Si el scroll no es rápido, realizar el desplazamiento horizontal dentro del contenedor
                scrollContainer.scrollLeft += event.deltaY;
                event.preventDefault();
            }
        };

        if (scrollContainer) {
            scrollContainer.addEventListener('wheel', onWheel);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('wheel', onWheel);
            }
        };
    }, []);

    useEffect(() => {
        // Actualizar la referencia del scroll anterior después de cada renderizado
        previousScrollYRef.current = window.scrollY || window.pageYOffset;
    });

    return (
        <div className="project-showcase">
            <h2>{title}</h2>
            <div className="scroll-container" ref={scrollContainerRef}>
                {images.map((image, index) => (
                    <div className="scroll-item" key={index}>
                        <img src={image.src} alt={`Screenshot ${index + 1}`} />
                        <p>{image.description}</p>
                    </div>
                ))}
            </div>
            <div className="project-details">
                <p>{description}</p>
                <p><strong>Duración del Proyecto:</strong> {duration}</p>
                <p><strong>Responsabilidades:</strong> Diseño y desarrollo desde cero.</p>
                <h4>Tecnologías Utilizadas:</h4>
                <ul>
                    {technologies.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
    .project-showcase {
        margin: 40px 0;
        padding: 20px;
        background: #1e1e1e;
        border-radius: 12px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        color: #fff;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        font-family: 'Outfit', sans-serif;
    }

    .scroll-container {
        display: flex;
        overflow-x: auto;
        padding: 10px;
        scrollbar-width: none;
        -ms-overflow-style: none; 
    }

    .scroll-container::-webkit-scrollbar {
        display: none; 
    }

    .scroll-item {
        flex: 0 0 auto;
        width: 1000px;
        margin-right: 10px;
        scroll-snap-align: start;
        background: #2e2e2e;
        border-radius: 8px;
        padding: 10px;
    }

    .scroll-item img {
        width: 100%;
        border-radius: 8px;
    }

    .scroll-item p {
        text-align: center;
        margin-top: 10px;
        color: #ccc;
    }

    .project-details {
        padding: 20px;
        background-color: #2e2e2e;
        border-radius: 8px;
        margin-top: 20px;
        color: #fff;
    }

    .project-details h4 {
        margin-top: 20px;
        font-family: 'Outfit', sans-serif;
    }

    .project-details ul {
        list-style-type: none;
        padding: 0;
    }

    .project-details li {
        background: #444;
        border-radius: 4px;
        padding: 5px;
        margin: 5px 0;
        transition: background 0.3s ease;
    }

    .project-details li:hover {
        background: #555;
    }
`}</style>

        </div>
    );
};

export default ProjectShowcase;