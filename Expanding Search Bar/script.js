let expansion = false;

document.querySelector('.btn').addEventListener('click', () => {
    const input = document.querySelector('.input');

    if(expansion){
        input.style.display = 'none';
        expansion = false;
    }
    else{
        input.style.display = 'inline-block'; // Change '200px' to the desired width
        expansion = true;

    }
  
});


