function kwtop(kw) {
  return kw * 1.34102;
}


function App() {
  const x = "myclass";
  const hp = 2000+10;
  const myobj = {name: "Ford", model: "Mustang", year: 1969};
  return (
    <> 
    <h1 className={x}>{x}Hello World *-</h1>
    <p> It has {x} horsepower</p>
    <p className="myclass">Hello Word!</p>
    <h1>Bon jour</h1>
    <p> It has {2000/5} horsepower</p>
    <p> It has {hp} horsepower</p>
    <p> It has {kwtop(2)} horsepower</p>
    <h1>my name is {myobj.name} {myobj.model} and I {myobj.year} Year</h1>
    </>
  );
}

export default App;
