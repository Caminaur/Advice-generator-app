
  const url = 'https://api.adviceslip.com/advice';

  const adviceId = document.getElementById('advice-id');
  const adviceText = document.getElementById('advice-text');
  const button = document.getElementById('getCuote');

  button.addEventListener('click',getQuote);
  window.addEventListener('load',getQuote);
  

  async function getQuote(){
    const response = await fetch(url);

    var data = await response.json();
    
    showQuote(data.slip);
  }

  function showQuote(data){
    let id = data.id;
    let advice = data.advice;
    adviceId.innerHTML = `advice ${id}`;
    adviceText.innerHTML = advice;
  }