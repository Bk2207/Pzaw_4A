import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

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
  Tracks: any[][];
};

interface BookVars{
  Title: string;
  Year: number;
  Img_src: string;
  Time: number;
};

//misc functions

function findLongestAlbum( array : any[] ){
  let max = 0;
  let maxTracksObject

  for(let i = 0;i < array.length;i++){  
      if(array[i].Tracks.length > max){
        maxTracksObject = array[i];
        max = array[i].Tracks.length;
      } 
  }

  return [ maxTracksObject ];
}

//console print functions

function printCardSelection(card_use : string, card_title : string){
  console.log(`Wybrano ${card_use}: ${card_title}`);
}

function printCardDetails(card_title: string, event : React.MouseEvent<HTMLInputElement>){
  console.log(`Pokaż szczegóły dla: ${card_title}`);
  event.stopPropagation();
}

function printTrackDetails(track_title : string, album_title : string){
  console.log(`Wybrano utwór: ${track_title} z ${album_title}`);
}

//component functions

function Movie( {Title, Year, Img_src, Rating} : MovieVars){
    const Polecany = (Rating >= 8) ? "Polecany" : "ㅤ";
    return(
      <div className="col-5">
        <h3 className="distingushed">{Polecany}</h3>
        <div className="card flexBasis" onClick={() => printCardSelection("film", Title)}>
          <img src={Img_src} className="card-img-top ImgStyle"/>
          <h2 className="card-title">{Title}</h2>
          <p className="card-text"> {Year} <br/>
          <input type="button" value="Pokaż szczegóły" className="DetailsBtn" onClick={(event) => printCardDetails(Title, event)}/> <br/>
          {Rating}/10</p>
        </div>
      </div>
      );
}

function Album( {Title, Year, Img_src, Tracks} : AlbumVars){

  const Utwory = (Tracks.length == 0) ? "Brak utworów" : "ㅤ";

  return(
    <div className="col-5">
      <h3 className="distingushed">{Utwory}</h3>
      <div className="card flexBasis">
        <img src={Img_src} className="card-img-top ImgStyle"/>
        <h2 className="card-title">{Title}</h2>
        <p className="card-text">{Year} </p>
        {Tracks.map(track => <p className="yas" onClick={() => printTrackDetails(track[0], Title)}> <div> {track[0]} </div> <div> {(track[1] - (track[1] % 60))/60}:{track[1] % 60 < 10 ? "0" : "" }{track[1] % 60} </div> </p> )}  
      </div>
    </div>
  );
}

function Book( {Title, Year, Img_src, Time } : BookVars){
  const Klasyk = (Year < 2000) ? "Klasyka" : "ㅤ";
  return(
    <div className="col-5">
      <h3 className="distingushed">{Klasyk}</h3>
      <div className="card flexBasis">
        <img src={Img_src} className="card-img-top ImgStyle"/>
        <h2 className="card-title">{Title}</h2>
        <p className="card-text">{Year} <br/>
        {Time}</p>
      </div>
    </div>
  );
}


function PrintMovies(array : any[], title : string, shouldPrintSearchBar : boolean){

  const [isOpen, setIsOpen] = useState(true);
  const [stringFilter, setStringFilter] = useState("");

  if(stringFilter != "") array = array.filter(element => element.Title.includes(stringFilter));

  return (
    <section className="flexStyleColumn">

      <div className="SectionDropdown"> 

        <h1>{title}</h1> 
        
        {shouldPrintSearchBar && <input type="text" id="movie-search" className="search" placeholder="Wyszukaj coś (po tytule) :3" onChange={(event) => {setStringFilter(event.target.value)}}/> }
        
        <input type="button" value={((isOpen) ? "⏷" : "⏵")} className="DropdownButton" onClick={() => {setIsOpen(!isOpen)}}/> 
      
      </div>

      <section className="row row-cols-auto justify-content-center">
        { isOpen && array.map(movie => <Movie Title={movie.Title} Year={movie.Year} Img_src={movie.ImgSrc} Rating={movie.Rating} />) }
        { array.length == 0 && <p>Nie znaleziono wyników</p> }
      </section>
    </section>
  );
}

function PrintBooks(array : any[], title : string, shouldPrintSearchBar : boolean){

  const [isOpen, setIsOpen] = useState(true);
  const [stringFilter, setStringFilter] = useState("");

  if(stringFilter != "") array = array.filter(element => element.Title.includes(stringFilter));


  return (
    <section className="flexStyleColumn">

      <div className="SectionDropdown"> 
      
        <h1>{title}</h1>
      
        { shouldPrintSearchBar && <input type="text" id="book-search" className="search" placeholder="Wyszukaj coś (po tytule) :3" onChange={(event) => {setStringFilter(event.target.value)}}/> }
      
        <input type="button" value={((isOpen) ? "⏷" : "⏵")} className="DropdownButton" onClick={() => {setIsOpen(!isOpen)}}/> 
      
      </div>
      <section className="row row-cols-auto justify-content-center">
        { isOpen && array.map(book => <Book Title={book.Title} Year={book.Year} Img_src={book.ImgSrc} Time={book.Number} />) }
        { array.length == 0 && <p>Nie znaleziono wyników</p> }
      </section>
    </section>
  );  
}

function PrintMusic(array : any[], title : string, shouldPrintSearchBar : boolean){

  const [isOpen, setIsOpen] = useState(true);
  const [stringFilter, setStringFilter] = useState("");

  if(stringFilter != "") array = array.filter(element => element.Title.includes(stringFilter));


  return (
    <section className="flexStyleColumn">
      <div className="SectionDropdown"> 
        <h1>{title}</h1> 

        {shouldPrintSearchBar && <input type="text" id="music-search" className="search" placeholder="Wyszukaj coś (po tytule) :3" onChange={(event) => {setStringFilter(event.target.value)}}/> }
        
        <input type="button" value={((isOpen) ? "⏷" : "⏵")} className="DropdownButton" onClick={() => {setIsOpen(!isOpen)}}/> 
      
      </div>
      
      <section className="row row-cols-auto justify-content-center">
        { isOpen && array.map(album => <Album Title={album.Title} Year={album.Year} Img_src={album.ImgSrc} Tracks={album.Tracks} />) }
        { array.length == 0 && <p>Nie znaleziono wyników</p> }
      </section>

    </section>
  ); 
}

function App(){
  const movies = [
      {
        Title: "Pięć Koszmarnych Nocy",
        Year: 2023,
        ImgSrc: "/fanfff.png",
        Rating: 7
      },

      {
        Title: "Projekt Hail Merry",
        Year: 2026,
        ImgSrc: "/hail.png",
        Rating: 9
      },

      {
        Title: "Żelazne płuco",
        Year: 2025,
        ImgSrc: "/lung.png",
        Rating: 10
      },

      {
        Title: "WALL·E",
        Year: 2008,
        ImgSrc: "/WallE.png",
        Rating: 10
      }
  ];

  const albums = [
    {
      Title: "Inside",
      Year: 2021,
      ImgSrc: "/inside.png",
      Tracks: [
        ["Content", 96],
        ["Comedy", 319],
        ["FaceTime with My Mom (Tonight)", 140],
        ["How the World Works", 255],
        ["White Woman's Instagram", 240],
        ["Unpaid Intern", 34],
        ["Bezos I", 58],
        ["Sexting", 201],
        ["Look Who's Inside Again", 83],
        ["Problematic", 193],
        ["30", 154],
        ["Don't Wanna Know", 63],
        ["Shit", 78],
        ["All Time Low", 54],
        ["Welcome to the Internet", 275],
        ["Bezos II", 45],
        ["That funny felling", 301],
        ["All Eyes on Me", 302],
        ["Goodbye", 249],
        ["Any Day Now", 57]
      ]
    },

    {
      Title: "Swordfishtrombones",
      Year: 1983,
      ImgSrc: "/underground.png",
      Tracks: [
        ["Underground", 121],
        ["Shore Leave", 258],
        ["Dave the Butcher", 141],
        ["Johnsburg, Illinois", 93],
        ["16 Shells From A Thirty-Ought Six", 273],
        ["Town With No Cheer", 268],
        ["In The Neighbourhood", 187],
        ["Just Another Sucker On The Vine", 106],
        ["Frank's Wild Years", 112],
        ["Swordfishtrombones", 189],
        ["Down, Down, Down", 137],
        ["Soldier's Things", 204],
        ["Gin Soaked Boy", 145],
        ["Trouble's Braids", 79],
        ["Rainbirds", 195]
      ]
    },
  ];

  const books = [
    {
      Title: "Lalka",
      Year: 1890,
      ImgSrc: "/Lalka.png",
      Number: 140
    },

    {
      Title: "Kordian",
      Year: 1834, 
      ImgSrc: "/Kordian.png",
      Number: 220
    },

    {
      Title: "Tristan i Izolda",
      Year: 1231,
      ImgSrc: "/tristanIIzolda.png",
      Number: 180
    },

    {
      Title: "Zbrodnia i Kara",
      Year: 1866,
      ImgSrc: "/ZbrodniaIKara.png",
      Number: 200
    }
  ];

  return (
    <main>
      <div className="container text-center">
        {PrintMovies(movies, "Filmy", true)}

        {PrintMusic(albums, "Muzyka", true)}

        {PrintBooks(books, "Książki", true)}

        {PrintMovies(movies.filter(movie => movie.Year > 2010), "Filmy wydanie po 2010", false)}
        
        {PrintBooks(books.sort((a, b) => {return b.Year - a.Year}), "Książki posortowane przez rok wydania", false)}

        {PrintMusic(findLongestAlbum(albums), "Nadłuższy album", false)}
      </div>
    </main>
  );
}

export default App