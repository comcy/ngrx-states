// Test interface
export class Todo {
    label: string;
    complete: boolean;
}

// action constant
export const ADD_TODO = '[Todo] Add Todo';
export const REMOVE_TODO = '[Todo] Remove Todo';

// action creators
export class AddTodo {
    readonly type = ADD_TODO;

    constructor(private payload: Todo) {

    }
}

export class RemoveTodo {
    readonly type = REMOVE_TODO;

    constructor(private payload: Todo) {

    }
}

console.log(new AddTodo({label: 'LOG', complete: false}));
