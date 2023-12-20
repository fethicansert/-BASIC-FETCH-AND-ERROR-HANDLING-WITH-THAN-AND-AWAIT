
import './App.css';

const accessToken = 'BQCNY_xsF7BMGVBe1MF4cL6VPdyKKabIttt0lJucaKmNKM1s_98YzWx2e6r0qz8mJCkHDz-czQcSqqWVYh6DkvtU2KN4gcd0onmp8JCyid95SsyvfWA';


function App() {
  

  const url = 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg';

  const request = new Request(url, { 
    method:'GET', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + accessToken
  }
  });


// API CALL WITH ASYNC FUNC with TRY - CATCH
async function getData(){
  try { 
    const response = await fetch(request);
    const data = await response.json();
    if(response.status !== 200) {
      const errMessage = data.error.message;
      throw new Error(`Server error: ${ errMessage }`)
    } else {
      console.log(data);
    }
  } catch(error) {
    console.error(error)
  }
}
getData();

// API CALL WITH THEN AND CATCH
fetch(request)
  .then(response => {
    if(response.status !== 200){
      throw new Error(`Server has overthinking :( Response Status ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));


//API CALL WITH THEN and CATCH error handling with data { error object } response
fetch(request)
  .then(response => response.json())
  .then(data => {
    if(data.hasOwnProperty('error')) {
      throw new Error(`Server Error: ${data.error.message}`);
    }
  })
  .catch(error => console.error(error));
  
  return (
    <div className="App">
      <h1>FETCH API</h1>
    </div>
  );
}

export default App;

//IF YOUR TRY TO CODE APPROXIMATELY YOU GET ACCES TOKEN EXPIRED