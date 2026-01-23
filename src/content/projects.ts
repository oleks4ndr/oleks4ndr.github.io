export type Project = {
    slug: string;
    title: string;
    summary: string;
    details: string;
    stack: string[];
    links?: { label: string; href: string }[];
}

export const projects: Project[] = [
    {
        slug: 'localworks',
        title: 'LocalWorks',
        summary: 'Freelance marketplace for tradespeople.',
        details: 'Full desc.',
        stack: ['React', 'Node/Express', 'MongoDB'],
        links: [
            { label: 'GitHub', href: 'https://github.com/oleks4ndr/localworks' },
            { label: 'Live', href: 'https://localworks.onrender.com/' }
        ]
    },
]