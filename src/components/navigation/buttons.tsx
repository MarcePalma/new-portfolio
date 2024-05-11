import Link from "next/link";
import { LeftArrow } from "./icons";

export function Back(href: string) {
    return (
        <Link href={href}>
            <LeftArrow />
        </Link>
    )
}