window.onload = (event) => {

  // Elements
  var lauchAIButton = document.getElementById("launch-ai");
  var aiPrompt = document.getElementById("ai-prompt");
  var hero = document.getElementById("hero");
  var footer = document.getElementById('footer');
  var exit = document.getElementById('exit');
  var submitButton = document.getElementById('submit-button');

// functions

  async function sendReq(data) {
    const url = 'https://frozen-ocean-83864-71f9b9ab7937.herokuapp.com/'
    const loadingScreen = document.getElementById('loading-screen');
  
    // Show the loading screen before the request
    loadingScreen.style.display = 'flex';
  
    try{
      const res = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'text/plain'
        },
        body: data
      });
      const responseData = await res.text();
      ReplaceContent(responseData);
    } catch (error) {
      console.error('Error processing request:', error);
    } finally {
      // Hide the loading screen after the request is completed
      loadingScreen.style.display = 'none';
    }
  }

  function ReplaceContent(NC) {
    document.open();
    document.write(NC);
    document.close();
  };

  //listeners

  lauchAIButton.addEventListener('click', (event) => {
    hero.style.display = 'none';
    aiPrompt.classList.remove('hidden');
    footer.classList.add('hidden');
  });

  exit.addEventListener('click', (event) => {
    aiPrompt.classList.add('hidden');
    hero.style.display = 'table-cell';
    footer.classList.remove('hidden');
  });

  submitButton.addEventListener('click', (event) => {
    var userInput = document.getElementById('ai-input').value;
    sendReq(userInput);
  });

};