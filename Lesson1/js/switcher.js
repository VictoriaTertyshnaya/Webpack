export function openbox(element_id) {
    if (document.getElementById('element_id')) {
        let obj = document.getElementById('element_id');
        if (obj.style.display != 'block') {
            obj.style.display = 'block';
        } else
            obj.style.display = 'none';
    };
};

export function openbox2(element2_id) {
    if (document.getElementById('element2_id')) {
        let obj2 = document.getElementById('element2_id');
        if (obj2.style.display != 'block') {
            obj2.style.display = 'block';
        } else
            obj2.style.display = 'none';
    };
};