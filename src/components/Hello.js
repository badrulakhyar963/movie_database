
function Hello(props) {
  
  const { name } = props;

  return (
    <div className="hello">
      <h2>Hello Guys</h2>
      <p>Saya {name} - Frontend Engineer</p>
    </div>
  );
}

export default Hello;
