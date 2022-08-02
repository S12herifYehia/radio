class Color{
    constructor(){
       this.player=document.getElementById('player')
       this.col1=document.getElementById('col1')
       this.col1.addEventListener('click',()=>{
         this.select_color('col1')
       })

       this.col2=document.getElementById('col2')
       this.col2.addEventListener('click',()=>{
         this.select_color('col2')
       })

       this.col3=document.getElementById('col3')
       this.col3.addEventListener('click',()=>{
         this.select_color('col3')
       })

       this.col4=document.getElementById('col4')
       this.col4.addEventListener('click',()=>{
         this.select_color('col4')
       })
    }
    select_color(color){
         if(color=='col1'){
           document.body.style.background='linear-gradient(to left , #ff1b6b, #45caff)';
           this.player.style.background='linear-gradient(to left , #ff1b6b, #45caff)'
         }else if(color=='col2'){
            document.body.style.background='linear-gradient(to left,#ff0f7b,#f89b29)';
            this.player.style.background='linear-gradient(to left,#ff0f7b,#f89b29)'
         }
         if(color=='col3'){
            document.body.style.background='linear-gradient(to left,#40c9ff,#e81cff)';
            this.player.style.background='linear-gradient(to left,#40c9ff,#e81cff)';
         }else if(color=='col4'){
            document.body.style.background='linear-gradient(to left,#ff930f,#fff95b)';
            this.player.style.background='linear-gradient(to left,#ff930f,#fff95b)';
         }

    }
}

onload=new Color()