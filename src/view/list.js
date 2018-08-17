export default class TaskListFactory {
    constructor(taskView) {
        this.taskView = taskView;
    }

    create($tasks, tasks) {
        const list = new UnorderedList($tasks, tasks, this.taskView);

        tasks.forEach(task => list.add(task));

        return list;
    }
}

class UnorderedList {
    constructor($list, items, itemFactory) {
        this.$list = $list;
        this.items = items;
        this.itemFactory = itemFactory;
        this.itemDomMap = new Map();
    }

    add(item) {
        const $item = this.itemFactory.render(item, this);

        this.items.push(item);
        this.itemDomMap.set(item, $item);
        this.$list.appendChild($item);
    }

    remove(item) {
        const $item = this.itemDomMap.get(item);
        const index = this.items.indexOf(item);
        
        if (index !== -1) {
            this.items.splice(index, 1);
        }

        this.itemDomMap.delete(item);
        $item.remove();
    }
}
