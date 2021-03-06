const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions(){
    //Button click active class
    for(let i = 0;i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click',()=>{
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            sectBtn[i].className += ' active-btn';
        })
    }

    //Sections active class
    allSections.addEventListener('click',(e) =>{
        const id = e.target.dataset.id;
        //console.log(id)
        if(id){
            //remove selected from the other btns
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active');

            // hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toogle theme
    const themBtn = document.querySelector('.theme-btn');
    themBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode');

    })
}

PageTransitions();