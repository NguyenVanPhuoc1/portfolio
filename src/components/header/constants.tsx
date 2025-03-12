// navLinks.ts
export interface NavLink {
    id: string;
    title: string;
}

export const navLinks: NavLink[] = [
    { id: "about", title: "About" },
    { id: "project", title: "Project" },
    { id: "contact", title: "Contact" },
    // { id: "cv", title: "Link CV" }
];
