document.addEventListener('DOMContentLoaded', function() {
    $(function() {
        // 각 .cell-content를 draggable로 만들기
        $('.cell-content').draggable({
            containment: 'table',
            cursor: 'move',
            revert: true
        });

        // 각 <td> 요소를 droppable 영역으로 설정하기
        $('td').droppable({
            drop: function(event, ui) {
                // 드롭된 요소의 위치를 이동
                var $droppedCell = $(this);
                var $draggedElement = ui.draggable;

                // 만약 셀 내에 이미지가 없는 경우에만 드롭을 허용
                if (!$droppedCell.has('img').length) {
                    $droppedCell.append($draggedElement.css({
                        top: 0,
                        left: 0
                    }));
                }
            }
        });
    });

    function showTime() {
        var date = new Date(); // 현재 날짜와 시간을 가져옵니다.
        var time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        document.getElementById('clock').innerText = time; // 'clock' ID를 가진 요소에 시간을 표시합니다.
        setTimeout(showTime, 1000); // 1초마다 함수를 다시 실행합니다.
    }

    showTime(); // 실시간 시계를 시작합니다

    const contextMenu = document.getElementById('contextMenu');
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        contextMenu.style.display = 'block';
        contextMenu.style.left = `${e.pageX}px`;
        contextMenu.style.top = `${e.pageY}px`;
    });

    document.addEventListener('click', function() {
        contextMenu.style.display = 'none';
    });

    contextMenu.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    const image = document.getElementById('clickableImage');
    const popup = document.getElementById('popup');
    image.addEventListener('click', function(e) {
        popup.style.display = 'block';
        popup.style.left = `${e.pageX}px`;
        popup.style.top = `${e.pageY}px`;
    });

    document.addEventListener('click', function(e) {
        if (e.target !== image && e.target !== popup) {
            popup.style.display = 'none';
        }
    });

    popup.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
