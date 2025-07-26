import Data from "./Data"
import Popup from "./Components/Popup"
import { useState } from 'react';
export default function Teachers() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return(
        <div>
            <p class="space">space</p>
            <h1>Music Teachers</h1>
            <div class="gallery">
                <a target="_blank">
                    <img src="/public/img_logo192.png" alt="Teacher Image" width="600" height="400"></img>
                    <button onClick={() => setButtonPopup(true)} class='btn'>Teacher</button>
                </a>
                <div class="icon-band">
                    <div class="desc">Teacher One</div>
                    <div class="genre">Instrument1, Instrument2, Instrument3</div>
                </div>
                <br/>
            </div>
            <div class="gallery">
                <a target="_blank">
                    <img src="img_logo192.png" alt="Teacher Image" width="600" height="400"></img>
                    <button onClick={() => setButtonPopup(true)} class='btn'>Teacher</button>
                </a>
                <div class="icon-band">
                    <div class="desc">Teacher Two</div>
                    <div class="genre">Instrument1, Instrument2, Instrument3</div>
                </div>
                <br/>
            </div>
            <div class="gallery">
                <a target="_blank">
                    <img src="img_logo192.png" alt="Teacher Image" width="600" height="400"></img>
                    <button onClick={() => setButtonPopup(true)} class='btn'>Teacher</button>
                </a>
                <div class="icon-band">
                    <div class="desc">Teacher 3</div>
                    <div class="genre">Instrument1, Instrument2, Instrument3</div>
                </div>
                <br/>
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div class="footer">
                    <h2>Contact:</h2>
                    <ul>
                        <li><p>Email: musicscene@gmail.com</p></li>
                        <li class="list"><p>Instagram: @Music_Scene</p></li>
                    </ul>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <img src="/Photos/logo512copy.png" alt="Teacher Photo"></img>
                <h1>Teacher Name</h1>
                <p class='genre2'>Instruments: Guitar, Piano, bass</p>
                <br/>
                <h2>Description:</h2>
                <p>This Teacher specializes in Jazz guitar. He has a music degree in Jazz composition from the Ohio State Conservitory. He has played in multiple jazz trios over the years and one time he even played somewhere that The Miles Davis played. He also said hello and took a photo with Bill Evens.</p>
                <h2>Location:</h2> <p>North Side of Spokane, WA</p>
                <h2>Online/Offline:</h2> <p>Both Zoom and in person lessons are offered.</p>
                <h2>Standard Rate:</h2> <p>$45.00 per 30 minute lesson.</p>
                <h2>Contact Info:</h2>
                 <ul>
                    <li><p>Phone: (xxx) xxx-xxxx</p></li>
                    <li class="list"><p>Email: musicteacher2000@gmail.com</p></li>
                    <li class="list"><p>Website: musicteacher.com</p></li>
                </ul>
            </Popup>
        </div>
    );
}