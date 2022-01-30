import "./App.css";
import { useState } from "react";

export default function App() {
  const movies=[
   { post:"https://i.ytimg.com/vi/--i0jaSDlF4/movieposter_en.jpg",
    name:"The lake house",
    summary:"The Lake House is a 2006 American fantasy romance drama film written by David Auburn and directed by Alejandro Agresti. A remake of the South Korean motion picture Il Mare (2000), it stars Keanu Reeves and Sandra Bullock who last appeared together in the 1994 action thriller film Speed.[2] The film revolves around an architect (Reeves) living in 2004 and a doctor (Bullock) living in 2006 who meet via letters left in the mailbox of a lake house where they both lived at separate points in time. They carry on a two-year correspondence while remaining separated by the time difference.",
    rating:"7/10",
  },
   { post:"https://images-na.ssl-images-amazon.com/images/I/81LpTj-580L.jpg",
     name:"After",
    summary:"After is a 2019 American romantic drama film directed by Jenny Gage, based on the 2014 novel of the same name by Anna Todd. The screenplay is written by Susan McMartin, Tamara Chestna, and Jenny Gage. The film stars Josephine Langford and Hero Fiennes Tiffin, and follows an inexperienced teenage girl who begins to romance a mysterious student during her first months of college. The cast includes Selma Blair, Inanna Sarkis, Shane Paul McGhie, Pia Mia, Khadijha Red Thunder, Dylan Arnold, Samuel Larsen, Jennifer Beals, and Peter Gallagher in supporting roles.",
    rating:"6/10",
   },
   { post:"https://m.media-amazon.com/images/M/MV5BNmI0MTliMTAtMmJhNC00NTJmLTllMzQtMDI3NzA1ODMyZWI1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    name:"Dil bechara",
    summary:"Dil Bechara (transl.The helpless heart) is a 2020 Indian Hindi-language coming-of-age romance film directed by Mukesh Chhabra in his directorial debut, and produced by Fox Star Studios, with a script written by Shashank Khaitan and Suprotim Sengputa. Based on John Green's 2012 novel The Fault in Our Stars and its subsequent 2014 American film adaptation, the film stars Sushant Singh Rajput and Sanjana Sanghi as terminal cancer patients. The film marks Rajput's final and posthumous appearance following his death on 14 June 2020.",
    rating:"9/10"
   },
   { post:"https://m.media-amazon.com/images/M/MV5BMjU2MTEwNzE0N15BMl5BanBnXkFtZTgwODgyNjMxMjE@._V1_.jpg",
    name:"Ek villain",
    summary:"Ek Villain: There's One in Every Love Story is a 2014 Indian Hindi-language action thriller film directed by Mohit Suri and produced by Shobha Kapoor and Ekta Kapoor under Balaji Motion Pictures. Based on a script written by Tushar Hiranandani and Milap Milan Zaveri, it starred Sidharth Malhotra, Shraddha Kapoor in lead roles and Riteish Deshmukh[3] and Aamna Sharif in supporting roles. The film tells about a ruthless criminal who is going on a killing spree, when his terminally ill wife is murdered by a sadistic serial killer.This marked the first time Deshmukh portraying a negative role. It was released worldwide on 27 June 2014 and received positive reviews from critics, garnering praise for the theme, direction, screenplay and performances. Made on a budget of ₹390 million, the film became a major box-office success with earnings of over ₹1 billion domestically and a worldwide gross of ₹1.7 billion. The song Galliyan,Zaroorat, Hamdard declared chartbusters of its realised",
    rating:"6.5/10",
   }, 
   { post:"https://www.filmibeat.com/img/popcorn/movie_posters/vinnaithaandi-varuvaaya-20170418150258-1417.jpg",
    name:"Vinnaithaandi Varuvaaya",
    summary:"Vinnaithaandi Varuvaayaa (transl.Will You Cross the Skies and Come?) is a 2010 Indian Tamil-language romantic drama film written and directed by Gautham Vasudev Menon, featuring Silambarasan and Trisha in the lead roles. Jointly produced Elred Kumar, Jayaraman, VTV Ganesh and P. Madan under the banner Escape Artists Motion Pictures and RS Infotainment, the film was distributed by Udhayanidhi Stalin's Red Giant Movies. The story was simultaneously shot in Telugu as Ye Maaya Chesave, starring Naga Chaitanya and Samantha, however, with a different cast and climax.[1]",
    rating:"8.1",
   },
  ];
  return (
    <div className="App">
      {movies.map((mov)=>( <Welcome name={mov.name} post={mov.post} summary={mov.summary} rating={mov.rating} />  
      ))}
      <Counter />
     
      
    </div>
  );
}
function Counter(){
  const [like,setLike]=useState(0);
  const [dislike,setDisLike]=useState(0);
 
  return(
    <div>
 
    <span><button onClick={()=>setLike(like +1)}>❤ {like}</button></span>
    <span><button onClick={()=>setDisLike(dislike +1)}>💔 {dislike}</button></span></div>
    );
}

function Welcome({post,name,summary,rating}) {
  
  return (
    <div className="welcome">

     
      <img className="movie" src={post} alt="" />
      <h1> {name}</h1>
      <p>{summary}</p>
      <h3>{rating} ⭐</h3>

         </div>  );
}
