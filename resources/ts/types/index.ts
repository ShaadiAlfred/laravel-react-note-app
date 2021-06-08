interface RootState {
}

interface User {
    id?: number;
    fullName?: string;
    email: string;
    password?: string;
    isAdmin?: boolean;
}

export {
    RootState,
    User,
};
