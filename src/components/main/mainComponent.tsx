import IconsGrid from "./IconsComponent"
import Link from "next/link";
import { CSSTransition } from "react-transition-group";
import { useRouter } from "next/router";


const MainComponent = () => {

    const router = useRouter()

    return (
        <main className="mx-auto grid grid-cols-3 gap-4 p-8 place-content-center">
            <IconsGrid title="Education" image="/images/icons/Education.webp" />
            <IconsGrid title="Experience" image="/images/icons/Experience.webp" />
            <IconsGrid title="Games" image="/images/icons/Games.webp" />
            <IconsGrid title="Contact" image="/images/icons/Contact.webp" />
            <IconsGrid title="Projects" image="/images/icons/Projects.webp" />
                <Link href="/aboutme">
                    <IconsGrid title="About Me" image="/images/icons/AboutMe.webp" />
                </Link>
        </main>
    )
}

export default MainComponent;