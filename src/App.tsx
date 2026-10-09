// interface Props{
//   name?: string;
//   age?: string;
// }

// function Greeter( {name = "Placeholder", age = "0"} : Props ){
  
//   let tmp_age = Number(age);

//   return(
//     <p>Witaj {name} that's {tmp_age} years old</p>
//   );
// }

interface Props{
  Mtitle : string;
  Myear : string;
  Mimg_src : string;
}

function MoviePoster( {Mtitle, Myear, Mimg_src} : Props ){
    return(
      <div>
        <img src={Mimg_src} nameClass="test"/>
        <p>{Mtitle}</p>
        <p>{Myear}</p>
      </div>
    );
}

function App(){
  return (
    <div>
      <MoviePoster Mtitle="Test1" Myear="2023" Mimg_src="./public/fanfff.png"/>
      <MoviePoster Mtitle="Test2" Myear="2026" Mimg_src="./public/hail.png" />
      <MoviePoster Mtitle="Test3" Myear="2025" Mimg_src="./public/lung.png" />
      
    </div>
  );
}

export default App
