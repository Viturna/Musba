function updateSlider(){slider.style.transform=`translateX(-${currentSlide*100}%)`;dots.forEach((n,t)=>{n.classList.toggle("active",t===currentSlide)})}function nextSlide(){currentSlide=(currentSlide+1)%slides.length;updateSlider()}function prevSlide(){currentSlide=(currentSlide-1+slides.length)%slides.length;updateSlider()}const slider=document.querySelector(".slider"),slides=document.querySelectorAll(".slide"),prevBtn=document.getElementById("prevBtn"),nextBtn=document.getElementById("nextBtn"),dots=document.querySelectorAll(".dot");let currentSlide=0;nextBtn.addEventListener("click",nextSlide);prevBtn.addEventListener("click",prevSlide);dots.forEach((n,t)=>{n.addEventListener("click",()=>{currentSlide=t,updateSlider()})});updateSlider();