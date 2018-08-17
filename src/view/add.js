import Task from 'app/entity/task';

export default class TaskAddView {
    render(taskList) {
        const $add = document.createElement('form');
        const $input = document.createElement('input');
        const $submit = document.createElement('button');
        
        $submit.type = 'button';
        $submit.innerText = 'Add';

        $add.append($input);
        $add.append($submit);

        $submit.addEventListener('click', () => {
            taskList.add(new Task($input.value));
        });

        return $add;
    }
}
