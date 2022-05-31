document.addEventListener('scroll', function(){
  return scrollFunction ()
})

function scrollFunction(){
  if (window.scrollY > 20){
    document.getElementById("go-top").style.display = "block"
  } else {
    document.getElementById("go-top").style.display = "none"
  }
}

function topFunction () {
  window.scrollTo(0,0)
}