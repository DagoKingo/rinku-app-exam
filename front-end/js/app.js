const workers = [];

const state = {
    workers: []
}

const template = () => {
    if (state.todoList.length < 1) {
      return `Sin trabajadores`;  
    } 

    let workers = state.todoList.map(item => ``);

    return workers;
};


const render = () => {
    console.log(state);
}