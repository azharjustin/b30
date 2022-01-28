import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Welcome name="spidy" pic="https://i.insider.com/5f778d302400440019129c6a?width=700"/>
      <Welcome name="tony"  pic="https://st1.bollywoodlife.com/wp-content/uploads/2019/01/Iron-Man-1.jpg"/>
      <Welcome name="hulk" pic="https://terrigen-cdn-dev.marvel.com/content/prod/1x/theincrediblehulk_lob_mas_hlf_02_0.jpg"/>
    </div>
  );
}
function Welcome({name,pic}) {
  
  return (
    <div>
      <h1>hello {name}💕</h1>
      <img className="marvel" src={pic} alt="" />

         </div>  );
}
