function changeBackground(squareId) {
    const squares = document.querySelectorAll('.square');
    const selectedSquare = document.getElementById(`square${squareId}`);
  
    squares.forEach(square => {
        square.classList.remove('selected');
    });
  
    selectedSquare.classList.add('selected');
  
    const computedStyle = window.getComputedStyle(selectedSquare);
    const backgroundImage = computedStyle.getPropertyValue('background-image');
  
    document.body.style.backgroundImage = backgroundImage;
}
