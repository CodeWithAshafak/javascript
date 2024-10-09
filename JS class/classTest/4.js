function showText() {
    document.getElementById('text').style.zIndex = 1;
    document.getElementById('text').style.opacity = 1;
  }
  
  function hideText() {
    document.getElementById('text').style.zIndex = -1;
    document.getElementById('text').style.opacity = 0;
  }
  
  document.getElementById('image').addEventListener('mouseover', showText);
  document.getElementById('image').addEventListener('mouseout', hideText);
  