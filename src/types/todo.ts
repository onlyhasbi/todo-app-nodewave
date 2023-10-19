export type TodoPayload = {
    todo: string;
}

export type Todo = {
    id: string,
    item: string;
    isDone: boolean
}

export type ResponseTodo = {
    id: string;
    item: string;
    userId: string;
    isDone: boolean;
    createdAt: string;
    updatedAt: string;
    user: {
        id: string;
        email: string;
        fullName: string;
    };
}
