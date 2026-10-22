import { useState } from "react";

interface MovieVars{
  Title: string;
  Year: number;
  Img_src: string;
  Rating: number;
};

interface AlbumVars{
  Title: string;
  Year: number;
  Img_src: string;
  Time: number;
};

interface BookVars{
  Title: string;
  Year: number;
  Img_src: string;
  Time: number;
};

function findLongestTrack( array : any[] ){
  let max = 0;
  let maxTimeObject = array[0];

  for(let i = 0;i < array.length;i++){  
      if(array[i].Time > max){
        maxTimeObject = array[i];
        max = array[i].Time;
      } 
  }

  return [ maxTimeObject ];
}

function Movie( {Title, Year, Img_src, Rating} : MovieVars){
    const Polecany = (Rating >= 8) ? "Polecany" : "";
    return(
        <div className="flexBasis">
          <h1 className="distingushed">{Polecany}</h1>
            <img src={Img_src} className="ImgStyle"/>
            <h2>{Title}</h2>
            <p>{Year} <br/>
            {Rating}/10</p>
        </div>
      );
}

function Album( {Title, Year, Img_src, Time} : AlbumVars){
  const seconds = Time % 60;
  const Dlugi = (Time > 180) ? "Długi utwór" : "";

  return(
    <div className="flexBasis">
      <h1 className="distingushed">{Dlugi}</h1>
      <img src={Img_src} className="ImgStyle"/>
      <h2>{Title}</h2>
      <p>{Year}</p>
      <p>{(Time - seconds)/60}:{seconds < 10 ? "0" : "" }{seconds}</p>
    </div>
  );
}

function Book( {Title, Year, Img_src, Time } : BookVars){
  const Klasyk = (Year < 2000) ? "Klasyka" : "";
  return(
    <div className="flexBasis">
      <h1 className="distingushed">{Klasyk}</h1>
      <img src={Img_src} className="ImgStyle"/>
      <h2>{Title}</h2>
      <p>{Year}</p>
      <p>{Time}</p>
    </div>
  );
}

// Future TODO thingy : try and make a singular function that will handle the printing of any of the arrays no matter which one

function PrintMovies(array : any[], title : string){
  //yet another reason to make a universal function
  function ChangeIsOpenState(){
    setIsOpen(!isOpen);
    
  }

  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="flexStyleColumn">
      <div className="SectionDropdown"> <h1>{title}</h1> <input type="button" value={((isOpen) ? "⏷" : "⏵")} className="DropdownButton" onClick={ChangeIsOpenState}/> </div>
      <section className="flexStyle">
        { isOpen ? array.map(movie => <Movie Title={movie.Title} Year={movie.Year} Img_src={movie.ImgSrc} Rating={movie.Rating} />) : null}
      </section>
    </section>
  );
}

function PrintBooks(array : any[], title : string){
  //yet another reason to make a universal function
  function ChangeIsOpenState(){
    setIsOpen(!isOpen);
    
  }

  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="flexStyleColumn">
      <div className="SectionDropdown"> <h1>{title}</h1> <input type="button" value={((isOpen) ? "⏷" : "⏵")} className="DropdownButton" onClick={ChangeIsOpenState}/> </div>
      <section className="flexStyle">
        { isOpen ? array.map(book => <Book Title={book.Title} Year={book.Year} Img_src={book.ImgSrc} Time={book.Number} />) : null}
      </section>
    </section>
  );  
}

function PrintMusic(array : any[], title : string){
  //yet another reason to make a universal function
  function ChangeIsOpenState(){
    setIsOpen(!isOpen);
    
  }

  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className="flexStyleColumn">
      <div className="SectionDropdown"> <h1>{title}</h1> <input type="button" value={((isOpen) ? "⏷" : "⏵")} className="DropdownButton" onClick={ChangeIsOpenState}/> </div>
      <section className="flexStyle">
        { isOpen ? array.map(track => <Album Title={track.Title} Year={track.Year} Img_src={track.ImgSrc} Time={track.Time} />) : null}
      </section>
    </section>
  ); 
}

function App(){
  const movies = [
      {
        Title: "Pięć Koszmarnych Nocy",
        Year: 2023,
        ImgSrc: "./public/fanfff.png",
        Rating: 7
      },

      {
        Title: "Projekt Hail Merry",
        Year: 2026,
        ImgSrc: "./public/hail.png",
        Rating: 9
      },

      {
        Title: "Żelazne płuco",
        Year: 2025,
        ImgSrc: "./public/lung.png",
        Rating: 10
      },

      {
        Title: "WALL·E",
        Year: 2008,
        ImgSrc: "./public/WallE.png",
        Rating: 10
      }
  ];

  const tracks = [
    {
      Title: "Underground",
      Year: 1983,
      ImgSrc: "./public/underground.png",
      Time: 140
    },

    {
      Title: "Envy Baby",
      Year: 2021,
      ImgSrc: "./public/envy_baby.png",
      Time: 180
    },

    {
      Title: "Mage of Violet",
      Year: 2021,
      ImgSrc: "./public/mage_of_violet.png",
      Time: 200
    },

    {
      Title: "Butcher Vanity",
      Year: 2024, 
      ImgSrc: "./public/vanity.png",
      Time: 220
    },
  ];

  const books = [
    {
      Title: "Lalka",
      Year: 1890,
      ImgSrc: "./public/Lalka.png",
      Number: 140
    },

    {
      Title: "Kordian",
      Year: 1834, 
      ImgSrc: "./public/Kordian.png",
      Number: 220
    },

    {
      Title: "Tristan i Izolda",
      Year: 1231,
      ImgSrc: "./public/tristanIIzolda.png",
      Number: 180
    },

    {
      Title: "Zbrodnia i Kara",
      Year: 1866,
      ImgSrc: "./public/ZbrodniaIKara.png",
      Number: 200
    }
  ];

  return (
    <main>
      <div className="flexStyleColumn">
        {PrintMovies(movies, "Filmy")}

        {PrintMusic(tracks, "Muzyka")}

        {PrintBooks(books, "Książki")}

        {PrintMovies(movies.filter(movie => movie.Year > 2010), "Filmy wydanie po 2010")}
        
        {PrintBooks(books.sort((a, b) => {return b.Year - a.Year}), "Książki posortowane przez rok wydania")}

        {PrintMusic(findLongestTrack(tracks), "Nadłuższy utwór")}
      </div>
    </main>
  );
}

export default App