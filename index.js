document.addEventListener('DOMContentLoaded', (event) => {

    function handleDragStart(e) {
        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDrop(e) {
        e.stopPropagation();

        dragSrcEl.innerHTML = e.dataTransfer.getData('text/html');
        this.innerHTML = e.dataTransfer.getData('text/html');

        return false;
    }

    function handleDragEnd(e) {
        dragItems.forEach(function (item) {
            item.classList.remove('over');
        });
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');
    }

    function handleBodyDrop(e) {
        e.stopPropagation();
        console.log(dragSrcEl);
        dragSrcEl.innerHTML = "";
        return false;
    }

    let dragItems = document.querySelectorAll('.dragable');
    dragItems.forEach(function (item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragenter', handleDragEnter);
        item.addEventListener('dragleave', handleDragLeave);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('drop', handleDrop);
        item.style.cursor = "grab";
    });
});