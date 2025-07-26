import Data from "./Data"
import Popup from "./Components/Popup"
import { useState } from 'react';
export default function Venues() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return(
        <div>
            <p class="space">space</p>
            <h1>Venues</h1>
            <div class="gallery">
                <a target="_blank">
                    <img src="/public/img_logo192.png" alt="Venue Image" width="600" height="400"></img>
                    <button onClick={() => setButtonPopup(true)} class='btn'>Venue</button>
                </a>
                <div class="icon-band">
                    <div class="desc">Venue One</div>
                    <div class="genre">Type: Bar</div>
                </div>
                <br/>
            </div>
            <div class="gallery">
                <a target="_blank">
                    <img src="img_logo192.png" alt="Venue Image" width="600" height="400"></img>
                    <button onClick={() => setButtonPopup(true)} class='btn'>Venue</button>
                </a>
                <div class="icon-band">
                    <div class="desc">Venue Two</div>
                    <div class="genre">Type: Theatre</div>
                </div>
                <br/>
            </div>
            <div class="gallery">
                <a target="_blank">
                    <img src="img_logo192.png" alt="Venue Image" width="600" height="400"></img>
                    <button onClick={() => setButtonPopup(true)} class='btn'>Venue</button>
                </a>
                <div class="icon-band">
                    <div class="desc">Venue 3</div>
                    <div class="genre">Type: Resturant</div>
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
                <img src="/Photos/logo512copy.png" alt="Venue Photo"></img>
                <h1>Venue Name</h1>
                <p class='genre2'>Type: Bar or Theatre or Resturant or Coffee Shop etc.</p>
                <br/>
                <h2>Description:</h2>
                <p>This bar draws in young hipsters most nights of the week and local indie artists typically add to the vibe by performing every Friday and Saturday nights.</p>
                <h2>Hours of Operation: </h2> <p>1:00 pm. - 10:00 pm.</p>
                <h2>Music Styles:</h2> <p>Indie Rock, Indie Pop, Acoustic, Folk.</p>
                <h2>Age Limit:</h2> <p>Family Friendly</p>
                <h2>Booking Contact Information:</h2>
                <ul>
                    <li><p>Phone: (xxx) xxx-xxxx</p></li>
                    <li class="list"><p>Email: Venue@gmail.com</p></li>
                    <li class="list"><p>Instagram: @Bar_Cool</p></li>
                    <li class="list"><p>Facebook: VenuePage</p></li>
                </ul>
                <h2>Address:</h2> <p>xxxxxx N. Music Ln, Spokane, WA xxxxx</p>
            </Popup>
        </div>
    );
}