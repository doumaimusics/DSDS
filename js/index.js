$(function () {
   var flag=false;
   var move=function (n,dir) {
      flag=true;
      var active=$('.banner .active');
      active.addClass(dir)
          .delay(600)
          .queue(function () {
             flag=false;
             $(this).removeClass('active')
                 .removeClass(dir)
                 .dequeue();
          })
      var op=(dir=='left')?'right':'left';
      $(n).addClass(op);
      $(n).get(0).offsetWidth;
      $(n).removeClass(op)
          .addClass('active');
   }
   var  imgs=$('.lunbo .time');
   console.log(imgs);
   var index=0;
   $('ul.index li').eq(index).addClass('block');
   $('.nth .nth-right').on('click',function () {
      if(flag){
         return;
      }
      var active=$('.banner .active');
      if(active.prev().length){
         var n=active.prev();
      }
      if(active.prev().attr('id')==undefined){
         n=$('.banner img').eq(3);
      }
      move(n,'right');
      index++;
      if(index==10){
         index=0;
      }
      console.log(index);
      $('ul.index li').removeClass('block');
      $('ul.index li').eq(index).addClass('block');


   })
   $('.nth .nth-left').on('click',function () {
      if(flag){
         return
      }
      var active=$('.banner .active');
      if(active.next().length){
         var n=active.next();
      }
      if(active.next().attr('id')==undefined){
         n=$('.banner img').eq(0);
      }
      console.log(active.next().length);
      move(n,'left');
      index--;
      if(index==-1){
         index=9;
      }
      $('ul.index li').removeClass('block');
      $('ul.index li').eq(index).addClass('block');
   })
})