import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'About Page',
    keywords: ['About Page', 'Isaac', 'information', '...'],
};


export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}