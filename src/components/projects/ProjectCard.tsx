import Image from 'next/image';
import Link from 'next/link';

export type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    projectUrl: string;
    date: string;
};

export default function ProjectCard({ title, description, image, projectUrl, date }: ProjectCardProps) {
    return (
        <div className="project-card">
            <div className="project-image">
                <Image
                    alt={title}
                    width={600}
                    height={600}
                    src={image}
                    className="image"
                />
            </div>
            <div className="project-info">
                <time dateTime={date} className="project-date">{date}</time>
                <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
                    <h3 className="project-title">{title}</h3>
                </Link>
                <p className="project-description">{description}</p>
            </div>
            <style jsx>{`
                .project-card {
                    position: relative;
                    overflow: hidden;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    background: #2e2e2e;
                    color: #fff;
                }

                .project-card:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
                }

                .project-image img {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                }

                .project-info {
                    padding: 16px;
                }

                .project-title {
                    font-size: 1.25rem;
                    font-weight: bold;
                    color: #fff;
                    margin-top: 10px;
                }

                .project-description {
                    font-size: 0.875rem;
                    color: #aaa;
                    margin-top: 10px;
                }

                .project-date {
                    font-size: 0.75rem;
                    color: #777;
                }
            `}</style>
        </div>
    );
}
