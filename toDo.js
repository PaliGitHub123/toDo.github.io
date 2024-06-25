        const button = document.getElementById("add");
        const body = document.getElementById("body");

        button.addEventListener("click", add);

        function add(){
            let img = document.createElement("img");
            img.src = "Circle_(transparent).svg";
            img.style.width = "100px"; // Optional: set size for the image
            img.style.height = "100px"; // Optional: set size for the image
            body.appendChild(img);

            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

            img.onmousedown = dragMouseDown;
            img.ontouchstart = dragMouseDown; // Added for mobile

            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                if (e.type === 'touchstart') {
                    pos3 = e.touches[0].clientX;
                    pos4 = e.touches[0].clientY;
                    document.ontouchend = closeDragElement;
                    document.ontouchmove = elementDrag;
                } else {
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    document.onmouseup = closeDragElement;
                    document.onmousemove = elementDrag;
                }
            }

            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                if (e.type === 'touchmove') {
                    pos1 = pos3 - e.touches[0].clientX;
                    pos2 = pos4 - e.touches[0].clientY;
                    pos3 = e.touches[0].clientX;
                    pos4 = e.touches[0].clientY;
                } else {
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                }
                img.style.top = (img.offsetTop - pos2) + "px";
                img.style.left = (img.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                if (event.type === 'touchend') {
                    document.ontouchend = null;
                    document.ontouchmove = null;
                } else {
                    document.onmouseup = null;
                    document.onmousemove = null;
                }
            }
        }