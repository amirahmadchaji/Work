$(document).ready(function(){  
// $('#my_btn').click(function(){
//       console.log(this)
//       this.preventDefault()
//        $('.about').slideToggle(2000)
//  })

 document.querySelector('#my_btn').addEventListener('click', function(e){
      e.preventDefault()
      $('.about').slideToggle(2000)
      console.log(e)
 })
})