import IconsGrid from "./IconsComponent"

const MainComponent = () => {

    return (
        <main className="mx-auto grid grid-cols-3 gap-4 p-8 place-content-center">
            <IconsGrid href={"/education"} title="Education" image="/images/icons/Education.webp" />
            <IconsGrid href={"/experience"} title="Experience" image="/images/icons/Experience.webp" />
            <IconsGrid href={"/games"} title="Games" image="/images/icons/Games.webp" />
            <IconsGrid href={"/contact"} title="Contact" image="/images/icons/Contact.webp" />
            <IconsGrid href={"/projects"} title="Projects" image="/images/icons/Projects.webp" />
            <IconsGrid href={"/aboutme"} title="About Me" image="/images/icons/AboutMe.webp" />
        </main>
    )
}

export default MainComponent;