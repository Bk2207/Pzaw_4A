// interface Props{
//   name?: string;
//   age?: string;
// }

import type React from "react";

// function Greeter( {name = "Placeholder", age = "0"} : Props ){
  
//   let tmp_age = Number(age);

//   return(
//     <p>Witaj {name} that's {tmp_age} years old</p>
//   );
// }

interface MovieVars{
  title: string;
  year: string;
  img_src: string;
}

interface AlbumVars{
  title: string;
  year: string;
  img_src: string;
  time: number;
}

interface BookVars{
  title: string;
  year: string;
  img_src: string;
  number: number;
}

const ImgStyle = {
  width: "400px",
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

function Movie( {title, year, img_src} : MovieVars){
    return(
        <div style={flexBasis}>
          <img src={img_src} style={ImgStyle}/>
          <h2>{title}</h2>
          <p>{year}</p>
        </div>
      );
}

function Album( {title, year, img_src, time} : AlbumVars){
  return(
    <div style={flexBasis}>
      <img src={img_src} style={ImgStyle}/>
      <h2>{title}</h2>
      <p>{year}</p>
      <p>{time}</p>
    </div>
  );
}

function Book( {title, year, img_src, number } : BookVars){
  return(
    <div style={flexBasis}>
      <img src={img_src} style={ImgStyle}/>
      <h2>{title}</h2>
      <p>{year}</p>
      <p>{number}</p>
    </div>
  );
}

function App(){
  const movies = [
      {
        Title: "Pięć Koszmarnych Nocy",
        Year: "2023",
        ImgSrc: "./public/fanfff.png"
      },

      {
        Title: "Projekt Hail Merry",
        Year: "2026",
        ImgSrc: "./public/hail.png"
      },

      {
        Title: "Żelazne płuco",
        Year: "2025",
        ImgSrc: "./public/lung.png"
      }
  ];

  const albums = [
    {
      Title: "Underground",
      Year: "1983",
      ImgSrc: "./public/underground.png",
      Time: 140
    },

    {
      Title: "Butcher Vanity",
      Year: "2024", 
      ImgSrc: "./public/vanity.png",
      Time: 220
    },

    {
      Title: "Envy Baby",
      Year: "2021",
      ImgSrc: "./public/envy_baby.png",
      Time: 180
    },

    {
      Title: "Mage of Violet",
      Year: "2021",
      ImgSrc: "./public/mage_of_violet.png",
      Time: 200
    }
  ];

  const books = [
    {
      Title: "Lalka",
      Year: "500",
      ImgSrc: "./public/underground.png",
      Number: 140
    },

    {
      Title: "Antygona",
      Year: "100", 
      ImgSrc: "./public/vanity.png",
      Number: 220
    },

    {
      Title: "Tristan i Izolda",
      Year: "2021",
      ImgSrc: "./public/envy_baby.png",
      Number: 180
    },

    {
      Title: "Zbrodnia i Kara",
      Year: "2021",
      ImgSrc: "./public/mage_of_violet.png",
      Number: 200
    }
  ];

  return (
    <main>
      <div style={flexStyleColumn}>
        <h1>Filmy</h1>
        
        <section style={flexStyle}>
          {movies.map(movie => <Movie title={movie.Title} year={movie.Year} img_src={movie.ImgSrc} />)};
        </section>

        <h1>Albumy</h1>
        
        <section style={flexStyle}>
          {albums.map(album => <Album title={album.Title} year={album.Year} img_src={album.ImgSrc} time={album.Time} />)};
        </section>

        <h1>Books</h1>

        <section style={flexStyle}>
          {books.map(book => <Book title={book.Title} year={book.Year} img_src={book.ImgSrc} number={book.Number} />)}
        </section>
      </div>
    </main>
  );
}

export default App
