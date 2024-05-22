import React, { useRef, useEffect, useState } from 'react';
import { ProjectShowcaseProps } from '@/types/types';

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ title, images, description, technologies, duration }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [zoomed, setZoomed] = useState(false);
    const mainImageRef = useRef<HTMLDivElement>(null);

    const handleImageClick = (index: number) => {
        setCurrentImageIndex(index);
        setZoomed(true);
    };

    const handleThumbnailClick = (index: number) => {
        setCurrentImageIndex(index);
        setZoomed(false);
    };

    useEffect(() => {
        if (zoomed && mainImageRef.current) {
            mainImageRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [currentImageIndex, zoomed]);

    return (
        <div className="project-showcase">
            <h2>{title}</h2>
            <div className={`scroll-container ${zoomed ? 'zoomed' : ''}`}>
                <div className="main-image" ref={mainImageRef}>
                    <img src={images[currentImageIndex].src} alt={`Screenshot ${currentImageIndex + 1}`} />
                </div>
                <p>{images[currentImageIndex].description}</p>
            </div>
            <div className="thumbnail-gallery">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={`Thumbnail ${index + 1}`}
                        className={index === currentImageIndex ? 'active' : ''}
                        onClick={() => handleThumbnailClick(index)}
                    />
                ))}
            </div>
            <div className="project-details">
                <p>{description}</p>
                <p><strong>Project Duration:</strong> {duration}</p>
                <p><strong>Responsibilities:</strong> Design and development from scratch.</p>
                <h4>Technologies Used:</h4>
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
                    position: relative;
                    overflow: hidden;
                    width: 100%;
                    height: auto;
                }

                .scroll-container.zoomed {
                    overflow: hidden;
                }

                .main-image {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 500px; /* Tamaño deseado del área de la imagen principal */
                }

                .main-image img {
                    max-width: 100%;
                    max-height: 100%;
                }

                .thumbnail-gallery {
                    display: flex;
                    justify-content: center;
                    margin-top: 10px;
                }

                .thumbnail-gallery img {
                    width: 100px;
                    margin: 0 5px;
                    cursor: pointer;
                    border: 2px solid transparent;
                    border-radius: 4px;
                }

                .thumbnail-gallery img.active {
                    border-color: #fff;
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
