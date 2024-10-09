const WelcomeMessage = ({todoItems}) => {

  return (
    <div>
     {todoItems.length === 0 && <h1>Enjoy your day</h1>}
    </div>
  );
}

export default WelcomeMessage;
