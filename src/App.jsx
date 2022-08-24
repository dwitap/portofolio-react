import logo from './logo.svg';
import './App.css';

const Foto = require("./assets/16:9.PNG")

function App() {
  return (
    <div id="content">
    <div class="kotak1">
        <h1>- HELLO</h1>
        <div class="name">I'm Dwita Permata</div>
    </div>
    <div class="kotak2">
        <img width="100%" height="100%" src={ Foto } alt="" />
    </div>
    <div class="kotak3">
        <h2>I'm a newbie</h2>
        <h3>- WEB DEVELOPMENT</h3>
        <div class="data">
            <p>Using: </p>
            <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
        </div>
    </div>
    <div class="kotak4">
        <h2>ABOUT ME</h2>
        <p>Hello i'm a pretty cheerful 18 year old girl. This year i graduated from Purwadhika Digital Technology School with results that I can be proud of. Nice to meet you and hopefully we can be a good partner. Can't wait for the project with you.</p>
    </div>
    <div class="kotak5">
        <h2>CONTACT ME</h2>
        <p>Phone Number : 085759******</p>
        <p>Email : dwitap*****@gmail.com</p>
        <p>Instagram : <a href="https://instagram.com/taper23_?igshid=YmMyMTA2M2Y=">@taper23_</a></p>
    </div>
</div>
  );
}

export default App;
