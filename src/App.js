import "./styles.css";
import data from "./data";
import Info from "./Info";
export default function App() {
  return (
    <div className="App">
      <div className="data-container">
        {data.map((info) => {
          const {id} = info;
          return(
            <div key={id} >
             <Info title={info.title} thumbnailUrl={info.thumbnailUrl}/>
              </div>
          )
        })}
        </div>
    </div>
  );
}
