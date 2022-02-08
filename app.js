

const theme_option = document.querySelectorAll('.theme_option .theme_manu ul a');
const all_theme_option = document.querySelectorAll('.theme_option .theme_body .theme_contant');


theme_option.forEach(item =>{

    item.addEventListener('click', function(e){

        e.preventDefault();

        theme_option.forEach(item =>{

            item.classList.remove('active');
           
        });

        item.classList.add('active');



        const theme_href = document.querySelector(this.getAttribute('href'));
        
        all_theme_option.forEach(item => {

            item.classList.remove('active');
        });

        theme_href.classList.add('active');



    });

});

// drop-down item




const click_extra = document.querySelectorAll('.theme_manu ul li .click_extra');


//dropdrown menu

click_extra.forEach(item =>{

    item.addEventListener('click', function(e){
        e.preventDefault();
        
        
       this.classList.toggle('dropdown');

        if(this.classList.contains('dropdown')){
            this.nextElementSibling.style.height = this.nextElementSibling.scrollHeight + 'px';
        }else{
            this.nextElementSibling.style.height = '0px';
        }
      

    });

});