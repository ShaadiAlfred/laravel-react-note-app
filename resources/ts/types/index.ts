export interface Credentials {
    email: string;
    password: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    is_admin: boolean;
}

export interface Note {
    id: number;
    user_id: number;
    title?: string;
    content?: string;
    updated_at: Date;
    created_at: Date;
}

export interface NewNote {
    title: string;
    content: string;
}
