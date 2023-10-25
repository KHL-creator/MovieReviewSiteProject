
import React from 'react';
import ReactDOM from 'react-dom';

const Movie = ({ title, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
    </div>
  );
};

const movies = [
  { title: 'Elemental', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SYO7yzO1LVWoMyVtB_VJRhMxoRQw1PqG2w&usqp=CAU" },
  { title: '영화 제목 2', image: 'https://example.com/movie2.jpg' },
  { title: '영화 제목 3', image: 'https://example.com/movie3.jpg' },
];

const App = () => {
  return (
    <div>
      <h3>3편의 추천영화를 소개합니다. </h3>
      {movies.map((movie, index) => (
        <Movie key={index} title={movie.title} image={movie.image} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
