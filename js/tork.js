class App{
    constructor(){
        let height_player=document.getElementById('player')
        height_player.style.height=screen.height + 'px'  
       if(screen.width < 500){
         height_player.style.width=screen.width + 'px'
        
       }
       let height_content=document.getElementById('content')
       height_content.style.height=screen.height-400 + 'px'
    }
}

onload=new App()


// class buttons

class Player_audio{
    constructor(){
      this.audio_file=document.getElementById('audio_file')
      this.title_audio=document.getElementById('title_audio')
      this.play=document.getElementById('play')
      this.isplayed;
      this.play.addEventListener('click',()=>{
        this.play_pause()
      })
      // this.play_pause()

      this.name_radio=[]
      this.name_radio[0]='اذاعه القرأن الكريم مصر'
      this.name_radio[1]='اذاعه القرأن الكريم السعوديه مباشر'
      // this.name_radio[2]='سوره البقره الشيخ ناصر القطامي'
      this.name_radio[2]='سوره ق الشيخ  ياسر الدوسري'
   

      this.source_audio=[]
      this.source_audio[0]='https://stream.radiojar.com/8s5u5tpdtwzuv'
      this.source_audio[1]='https://stream.radiojar.com/4wqre23fytzuv'
      // this.source_audio[2]='./aud/002 - Al-Baqarah.mp3'
      this.source_audio[2]='./aud/kafyassereldosary.mp3'

      this.server=0;
      
      this.set_source()
      
      document.getElementById('next').addEventListener('click',()=>{
        if(this.server<this.source_audio.length-1){
            ++this.server
            this.isplayed=false
        }else{
          this.server=0;
        }
        localStorage.setItem('Save-postion',this.server)
        this.set_source()
      })

      document.getElementById('back').addEventListener('click',()=>{
        if(this.server>0){
          --this.server
          this.isplayed=false
        }else{
          this.server=this.source_audio.length-1;
        }
        this.set_source()
      })
      
    }
    
    set_source(){
      if(localStorage.getItem('Save-postion')!=null){
        this.server=localStorage.getItem('Save-postion')


      }
       this.audio_file.src = this.source_audio[this.server];
       this.title_audio.innerHTML=this.name_radio[this.server]
       this.play_pause()
    }

    play_pause(){
        if(this.isplayed == false){ 
          this.play.src='./img/pause.png'
          this.audio_file.play()
          this.isplayed=true
    }
    else{
        this.play.src='./img/play.png'
        this.audio_file.pause()
        this.isplayed=false;
    }
 }
}

onload =new Player_audio()