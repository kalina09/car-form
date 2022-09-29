import Form from './components/Form';

function App() {
  // send the inputs information to firebase only for valid inputs
  async function addInformationHandler(information) {
    const response = await fetch(
      'https://react-project-6cbff-default-rtdb.firebaseio.com/information.json',
      {
        method: 'POST',
        body: JSON.stringify(information),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();

    // open the developer console to see the results
    console.log(data);
    console.log(information);
  }

  return (
    <div className="app">
      <Form onAddInformation={addInformationHandler} />
    </div>
  );
}

export default App;
