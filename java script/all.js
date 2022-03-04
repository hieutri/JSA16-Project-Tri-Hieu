const headerResBtn = document.querySelector('.responsive-navigation-button');
const headerResContainer = document.querySelector('.header-responsive-navigation-container');
const headerRes = document.querySelector('.header-responsive-navigation');
document.getElementById('close').addEventListener('click', () =>{
    headerRes.style.display = 'none'
})
headerResBtn.addEventListener('click', () => {
    if (headerRes.style.display == 'flex') {
        headerRes.style.display = 'none'
    }
    else{
        headerRes.style.display = 'flex'
   }
})
window.onclick = (event) => {
    if (event.target == headerRes) {
        headerRes.style.display = 'none';
    }
}