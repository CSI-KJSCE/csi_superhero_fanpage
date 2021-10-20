import "./App.css";
import logo from "./assets/logo2.png";
import iron_man from "./assets/iron-man.jpg";
import { useEffect, useState } from "react";
// import { Table, Spinner } from "react-bootstrap";
import spinner from "./assets/Spinner.gif";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let url = "https://superherobackend12.herokuapp.com/";
    try{
      const make_request = async()=>{
        let result = await fetch(url);
        result = await result.json();
        console.log(result);
        setData(result);
        setLoading(false);
      }
      make_request();
    }catch(err){
      console.log(err);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="background">
          <img src={logo} className="logo"></img>
          <img src={spinner} className="spinner"></img>
        </div>
      ) : (
        <div className="background">
          <img src={logo} className="logo"></img>
          {data.map((hero) => (
            <div className="superhero_container">
              <div className="photo">
                <img src={hero.image} className="superhero_photo"></img>
              </div>
              <div className="info_division">
                <div className="info_division--title">
                  <div className="title_name">{hero.title}</div>
                  <div className="Author_name"> -{hero.author}</div>
                </div>
                <div className="description">{hero.description}</div>
                <div className="powers_arrays">
                  {hero.power.map((powers) => (
                    <div
                      className="power"
                      style={{
                        color: hero.text_color,
                        backgroundColor: hero.widget_color,
                      }}
                    >
                      {powers}
                    </div>
                  ))}
                </div>

                <div>
                  <p className="quotes_complete">" {hero.dialogue} "</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
