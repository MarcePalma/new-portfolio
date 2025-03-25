import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <main className="px-6 py-12 bg-[#121212]">
            <h1 className="text-4xl font-bold text-center text-white mb-8">Projects</h1>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ProjectCard
                    title="WeatherApp"
                    date="08-08-2023"
                    image="/images/projects/weather-app.webp"
                    description="lorem ipsum"
                    projectUrl="https://weatherapp32.vercel.app/"
                />
                <ProjectCard
                    title="AstroFrame"
                    date="12-29-2023"
                    image="/images/projects/AstroFrame.webp"
                    description="lorem ipsum"
                    projectUrl="https://weatherapp32.vercel.app/"
                />
                <ProjectCard
                    title="ecommerce-semiparcial"
                    date="11-08-2023"
                    image="/images/projects/tienda-shopix.webp"
                    description="lorem ipsum"
                    projectUrl="https://weatherapp32.vercel.app/"
                />
                <ProjectCard
                    title="Blog"
                    date="11-05-2023"
                    image="/images/projects/Blog.webp"
                    description="lorem ipsum"
                    projectUrl="https://weatherapp32.vercel.app/"
                />
                <ProjectCard
                    title="Music Player"
                    date="11-20-2023"
                    image="/images/projects/music-player.webp"
                    description="lorem ipsum"
                    projectUrl="https://weatherapp32.vercel.app/"
                />
                <ProjectCard
                    title="Canvas Game"
                    date="2023-08-08"
                    image="/images/projects/Canvas-game.webp"
                    description="lorem ipsum"
                    projectUrl="https://weatherapp32.vercel.app/"
                />
                <ProjectCard
                    title="3 En Linea"
                    date="2024-08-08"
                    image="/images/projects/3-en-linea.webp"
                    description="lorem ipsum"
                    projectUrl="https://weatherapp32.vercel.app/"
                />
                <ProjectCard
                    title="Chat"
                    date="2023-08-08"
                    image="/images/projects/InProgress.webp"
                    description="lorem ipsum"
                    projectUrl="https://weatherapp32.vercel.app/"
                />
            </section>
        </main>
    );
}
