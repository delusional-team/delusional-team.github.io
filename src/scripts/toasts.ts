import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const toast = (name: string) => Toastify({
    text: `El directorio '${name}' está vacío`,
    duration: 2000,
    close: true,
    gravity: 'bottom',
    position: 'center',
    style: {
        background: 'black',
    },
    stopOnFocus: true,
});

const anchors = Array.from(document.querySelectorAll('.navigate-anchor')) as HTMLAnchorElement[];

anchors.forEach((anchor) => {
    const isEmpty = anchor.dataset.isempty === 'true';
    const isDir = anchor.dataset.nodetype === 'dir';
    const nodeName = anchor.dataset.nodename as string;

    anchor.addEventListener('click', (e) => {
        if (isDir && isEmpty) {
            e.preventDefault();
            toast(nodeName).showToast();
        }
    });
})
