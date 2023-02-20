let select = document.querySelector('select');
let allLang = ['en', 'ua', 'ru'];

select.addEventListener('change', changeURLadress);
function changeURLadress(){
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
};

changeLanguage =()=>{
    let hash = window.location.hash;
    hash = hash.slice(1);
    if(!allLang.includes(hash)){
        location.href = window.location.pathname +'#en';
        location.reload();
    };
    select.value = hash;
    for(let key in langArr){
        let elem = document.querySelector('.lng-' + key);
        elem.innerHTML = langArr[key][hash];
        elem.style.backgroundColor =  langArr[key]['en'];
    }   
};
changeLanguage();





