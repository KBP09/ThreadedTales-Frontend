export interface SocialLinks {
    twitter?: string | null;
    facebook?: string | null;
    instagram?: string | null;
}

export interface User {
    id: string;
    name: string;
    email: string;
    about?: string | null;
    social: SocialLinks;
    createdAt: string;
    updatedAt: string;
    stories: Story[];
    accessToken: string;
}

export interface Node {
    id: string
    title: string
    content: string
    userId: string
    parentId: string | null
    createdAt: string
    updatedAt: string
    children: Node[]
}

export interface Story {
    id: string
    title: string
    content: string
    userId: string
    parentId: string | null
    createdAt: string
    updatedAt: string
    children: Node[]
    createdBy: {
        name: string
    }
}

export interface NetworkContextType {
    currentUser: User | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}