const initialState = {
    todoList: [
        {
            activity: "Learn React(1)",
            condition: true,
            id: 1
        },
        {
            activity: "Cook food(2)",
            condition: false,
            id: 2
        },
        {
            activity: "Go for a walk(3)",
            condition: false,
            id: 3
        },
        {
            activity: "Feed the dog(4)",
            condition: true,
            id: 4
        },
        {
            activity: "Go to sleep(5)",
            condition: false,
            id: 5
        },
        {
            activity: "Feed the dog(6)",
            condition: true,
            id: 6
        },
        {
            activity: "Go to sleep(7)",
            condition: false,
            id: 7
        },
        {
            activity: "Feed the dog(8)",
            condition: false,
            id: 8
        },
        {
            activity: "Go to sleep(9)",
            condition: true,
            id: 9
        },
    ],
    currentTodoText: "",
    currentPage: 1,
    pageSize: 5,
    todoFilter: "all",
    currentListLength: 9,
};

export default initialState;