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
  Link_src? : string;
}

const ImgStyle = {
  width: "300px",
  height: "500px",
};

const flexStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",

};

const flexStyleColumn = {
  display: "flex",
  flexDirection: "column",
}

const flexBasis = {
  flexGrow : "1",
  flexBasis: "50%",
}

function Poster( {Mtitle, Myear, Mimg_src, Link_src} : Props ){
    if(typeof Link_src === 'undefined'){
    return(
        <div style={flexBasis}>
          <img src={Mimg_src} style={ImgStyle}/>
          <h2>{Mtitle}</h2>
          <p>{Myear}</p>
        </div>
      );
    }else{
      return(
        <div style={flexBasis}>
          <img src={Mimg_src} style={ImgStyle}/>
          <h2>{Mtitle}</h2>
          <p>{Myear}</p>
          <a href={Link_src} target="_blank">Music video</a>
        </div>
      );
    }
}

function App(){

  return (
    <div style={flexStyleColumn}>
      <div style={flexStyle}>
        <Poster Mtitle="Pięć Koszmarnych Nocy" Myear="2023" Mimg_src="./public/fanfff.png" />
        <Poster Mtitle="Projekt Hail Merry" Myear="2026" Mimg_src="./public/hail.png" />
        <Poster Mtitle="Żelazne Płuco" Myear="2025" Mimg_src="./public/lung.png" />
      </div>

      <div style={flexStyle}>
        <Poster Mtitle="Underground" Myear="1983" Mimg_src="./public/underground.png" Link_src="https://www.youtube.com/watch?v=vaTSQzYIR3U" />
        <Poster Mtitle="Butcher Vanity" Myear="2024" Mimg_src="./public/vanity.png" Link_src="https://www.youtube.com/watch?v=vjBFftpQxxM" />
        <Poster Mtitle="Mage of Violet" Myear="2021" Mimg_src="./public/mage_of_violet.png" Link_src="https://www.youtube.com/watch?v=pMNnZIz6YYM" />
        <Poster Mtitle="Envy Baby" Myear="2021" Mimg_src="./public/envy_baby.png" Link_src="https://www.youtube.com/watch?v=eXIX5KSrbeI" />
      </div>
    </div>
  );
}

export default App
