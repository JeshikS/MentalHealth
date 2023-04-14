import React, { useState, useEffect } from "react";
import "./css/main.css";
import "./App.css"
import logo from "./images/1.avif";
import NavBar from "./pages/NavBar"
import Footer from "./pages/Footer";

 function App() {
//   const Quotes = () => {
//     const [quote, setQuote] = useState("");
//     const [author, setAuthor] = useState("");

//     useEffect(() => {
//       getQuote();
//     }, []);

//     function getQuote(){
//       let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//           let dataQuotes = data.quotes;
//           let randomNum = Math.floor(Math.random() * dataQuotes.length);
//           let randomQuote = dataQuotes[randomNum];

//           setQuote(randomQuote.quote);
//           setAuthor(randomQuote.author);
//         });
//     };

//     function handleClick() {
//       getQuote();
//     };
  return (
    
      <div>
        <NavBar/>
        <header>
          <div id="quote-box">
            <div id="text">
              {/* <p>{quote}</p> */}
            </div>
            <div id="author">
              {/* <p>{author}</p> */}
            </div>
            <div id="buttons">
              {/* <button onClick={handleClick} id="new-quote">
                New Quote
              </button> */}
            </div>
          </div>
          <div>
            <div className="header_right">
              <div className="header_right-image">
                <img src={logo} alt="Not Responding" />
              </div>
            </div>
          </div>
        </header>
        <section className="health">
          <div className="container health_container">
            <div className="health_left">
              <h1>How nature affects your mental health?</h1>
              <p>
                Nature can have a significant impact on mental health. There is
                a growing body of research that suggests spending time in
                natural settings can improve mood, reduce stress, and boost
                cognitive function. Here are some ways that nature can affect
                mental health.
              </p>
              <a
                href="https://www.mentalhealth.org.uk/our-work/research/nature-how-connecting-nature-benefits-our-mental-health#:~:text=Nature%20can%20generate%20many%20positive,particularly%20lower%20depression%20and%20anxiety."
                className="btn"
              >
                View More
              </a>
            </div>
            <div className="health_right">
              <ul className="right">
                <li>
                  <b>Reduced Stress:</b> Studies have found that exposure to
                  nature can reduce cortisol levels, a hormone associated with
                  stress. Spending time in natural settings, such as forests or
                  parks, has been shown to lower blood pressure, decrease heart
                  rate, and improve mood.
                </li>
                <li>
                  <b>Improved Mood:</b> Nature can have a positive effect on
                  mood. Studies have found that spending time in nature can
                  increase feelings of happiness and decrease feelings of anger,
                  anxiety, and depression.
                </li>
                <li>
                  <b>Enhanced Cognitive Function:</b> Nature can also have a
                  positive impact on cognitive function. Research has shown that
                  being in nature can improve memory, attention, and creativity.
                </li>
                <li>
                  <b>Increased Physical Activity:</b> Spending time in nature
                  often involves physical activity, which can have a positive
                  impact on mental health. Exercise is known to improve mood and
                  reduce symptoms of anxiety and depression.
                </li>
                <li>
                  <b>Social Connection:</b> Nature can also be a place for
                  social connection, which is important for mental health.
                  Spending time with others in natural settings can enhance
                  social support and reduce feelings of loneliness.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="videos">
          <h2>Some videos you can watch</h2>
          <div className="container videos_container">
            <div className="v1">
              <iframe
                width={350}
                height={240}
                src="https://www.youtube.com/embed/ga-MniJxQz8"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="v2">
              <iframe
                width={350}
                height={240}
                src="https://www.youtube.com/embed/O9qRyFOLdQk"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="v3">
              <iframe
                width={350}
                height={240}
                src="https://www.youtube.com/embed/1I9ADpXbD6c"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="v4">
              <iframe
                width={350}
                height={240}
                src="https://www.youtube.com/embed/rkZl2gsLUp4"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <a href="Media.html" className="btn1">
            View more videos
          </a>
        </section>
        <Footer/>
      </div>
    
  );
  }

 export default App;