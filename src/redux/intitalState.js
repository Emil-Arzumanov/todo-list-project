const initialState = {
    todoList: [
        {
            activity: "Learn React",
            condition: true,
            id: 1
        },
        {
            activity: "Cook food",
            condition: false,
            id: 2
        },
        {
            activity: "Go for a walk",
            condition: false,
            id: 3
        },
        {
            activity: "Feed the dog",
            condition: true,
            id: 4
        },
        {
            activity: "Go to sleep",
            condition: false,
            id: 5
        },
        {
            activity: "Feed the dog",
            condition: true,
            id: 6
        },
        {
            activity: "Go to sleep",
            condition: false,
            id: 7
        },
        {
            activity: "Feed the dog",
            condition: false,
            id: 8
        },
        {
            activity: "Go to sleep",
            condition: true,
            id: 9
        },
    ],
    currentTodoText: "",
    currentPage: 1,
    pageSize: 5,
    todoFilter: "all",
};

export default initialState;