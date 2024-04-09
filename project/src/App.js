const menuBtn = document.querySelector('#menu-btn');
const menu = document.querySelector('#menu');
// app.js

// menu-toggle.js
// JavaScript for toggling the mobile menu
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('nav-menu').classList.toggle('hidden');
});



menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menu.classList.toggle('block');
});

function App() {
  return (
    <div className="App">

  
    </div>
  );
}

export default App;
