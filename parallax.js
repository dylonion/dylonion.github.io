window.addEventListener('scroll', () => {
   let parent = document.querySelector('.header');
   let children = parent.querySelectorAll('.parallax-layer');
   for(let i = 0; i < children.length; i++) {
     children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
   }
}, false)

document.addEventListener('DOMContentLoaded', function(event) {
  document.querySelector('.dm-title').classList.add('dm-anime')
})
// window.addEventListener('scroll', () => {
//   let windowScroll = this.scrollY
//   let layer1 = document.querySelector('.layer1')
//   let layer2 = document.querySelector('.layer2')
//   let layer3 = document.querySelector('.layer3')

//   layer1.style.transform = 'translateY(' + windowScroll/2 + '%)'
//   layer2.style.transform = 'translateY(' + windowScroll/4 + '%)'
//   layer3.style.transform = 'translateY(' + windowScroll/100 + '%)'
// })
