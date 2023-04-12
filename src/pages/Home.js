import React from 'react'
import '../css/main.css'
import '../css/Home.css'
import logo from '../images/1.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faVolumeUp, faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("#btn"),
authorName = document.querySelector(".name"),
speechBtn = document.querySelector(".speech"),
copyBtn = document.querySelector(".copy"),
synth = speechSynthesis;
function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    });
}
speechBtn.addEventListener("click", ()=>{
    if(!quoteBtn.classList.contains("loading")){
        let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
        synth.speak(utterance);
        setInterval(()=>{
            !synth.speaking ? speechBtn.classList.remove("active") : speechBtn.classList.add("active");
        }, 10);
    }
});
copyBtn.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});
quoteBtn.addEventListener("click", randomQuote);
export default function Home() {
    return (
        <>
            <div>
  <header>
    <div id="welcome">
    </div>
    <div className="container header_container">
      <div className="header_left">
        <div className="wrapper">
          <h1>Quote of the Day</h1>
          <div className="content">
            <div className="quote-area">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <p className="quote">Never give up because you never know if the next try is going to be the one that works.</p>
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
            <div className="author">
              <span>__</span>
              <span className="name">Mary Kay Ash</span>
            </div>
          </div>
          <div className="buttons">
            <div className="features">
              <ul>
                <li className="speech"><FontAwesomeIcon icon={faVolumeUp} /></li>
                <li className="copy"><FontAwesomeIcon icon={faCopy} /></li>
              </ul>
              <button id="btn">New Quote</button>
            </div>
          </div>
        </div>
      </div>
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
        <p>Nature can have a significant impact on mental health. There is a growing body of research that suggests spending time in natural settings can improve mood, reduce stress, and boost cognitive function. Here are some ways that nature can affect mental health.</p>
        <a href="https://www.mentalhealth.org.uk/our-work/research/nature-how-connecting-nature-benefits-our-mental-health#:~:text=Nature%20can%20generate%20many%20positive,particularly%20lower%20depression%20and%20anxiety." className="btn">View More</a>
      </div>
      <div className="health_right">
        <ul className="right">
          <li><b>Reduced Stress:</b> Studies have found that exposure to nature can reduce cortisol levels, a hormone associated with stress. Spending time in natural settings, such as forests or parks, has been shown to lower blood pressure, decrease heart rate, and improve mood.</li>
          <li><b>Improved Mood:</b> Nature can have a positive effect on mood. Studies have found that spending time in nature can increase feelings of happiness and decrease feelings of anger, anxiety, and depression.</li>
          <li><b>Enhanced Cognitive Function:</b> Nature can also have a positive impact on cognitive function. Research has shown that being in nature can improve memory, attention, and creativity.</li>
          <li><b>Increased Physical Activity:</b> Spending time in nature often involves physical activity, which can have a positive impact on mental health. Exercise is known to improve mood and reduce symptoms of anxiety and depression.</li>
          <li><b>Social Connection:</b> Nature can also be a place for social connection, which is important for mental health. Spending time with others in natural settings can enhance social support and reduce feelings of loneliness.</li>
        </ul>
      </div>
    </div>
  </section>
  <section className="videos">
    <h2>Some videos you can watch</h2>
    <div className="container videos_container">
      <div className="v1">
        <iframe width={350} height={240} src="https://www.youtube.com/embed/ga-MniJxQz8" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
      <div className="v2">
        <iframe width={350} height={240} src="https://www.youtube.com/embed/O9qRyFOLdQk" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
      <div className="v3">
        <iframe width={350} height={240} src="https://www.youtube.com/embed/1I9ADpXbD6c" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
      <div className="v4">
        <iframe width={350} height={240} src="https://www.youtube.com/embed/rkZl2gsLUp4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
    </div>
    <a href="Media.html" className="btn1">View more videos</a>
  </section>
</div>
        </>
    )
}
