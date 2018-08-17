export default class TaskView {
    render(task, taskList) {
        const $task = document.createElement('div');
        const $title = document.createElement('label');
        const $complete = document.createElement('button');
        const $remove = document.createElement('button');

        $title.innerText = task.getTitle();
        $complete.innerText = 'Complete';
        $remove.innerText = 'Remove';

        $task.append($title);
        $task.append($complete);
        $task.append($remove);

        $remove.addEventListener('click', () => {
            taskList.remove(task);
        });

        $complete.addEventListener('click', () => {
            task.toggleComplete();

            if (task.isComplete()) {
                $task.classList.add('task-complete');                
            } else {
                $task.classList.remove('task-complete');
            }
        });

        return $task;
    }
}
