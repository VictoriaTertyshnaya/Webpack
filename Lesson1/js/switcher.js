export function openbox(element_id, element2_id, idd) {
    let obj = document.getElementById(element_id);
    let obj2 = document.getElementById(element2_id);
    if (idd == 1) {
        obj.style.display = 'block';
        obj2.style.display = 'none';
    } else {
        obj.style.display = 'none';
        obj2.style.display = 'block';
    }
    console.log('openbox')
};
