import Data from "./Data"
import Popup from "./Components/Popup"
import { useState } from 'react';
export default function Bands() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return(
        <div>
            <p class="space">space</p>
            <h1>Bands</h1>
            <div class="gallery">
                <a target="_blank">
                    <img src="logo192.png" alt="Band Image" width="600" height="400"></img>
                    <button onClick={() => setButtonPopup(true)} class='btn'>Band</button>
                </a>
                <div class="icon-band">
                    <div class="desc">Band Name One</div>
                    <div class="genre">Genre1, Genre2, Genre3</div>
                </div>
                <br/>
            </div>
            <div class="gallery">
                <a target="_blank">
                    <img src="logo192.png" alt="Band Image" width="600" height="400"></img>
                    <button onClick={() => setButtonPopup(true)} class='btn'>Band</button>
                </a>
                <div class="icon-band">
                    <div class="desc">Band Name Two</div>
                    <div class="genre">Genre1, Genre2, Genre3</div>
                </div>
                <br/>
            </div>
            <div class="gallery">
                <a target="_blank">
                    <img src="logo192.png" alt="Band Image" width="600" height="400"></img>
                    <button onClick={() => setButtonPopup(true)} class='btn'>Band</button>
                </a>
                <div class="icon-band">
                    <div class="desc">Band Name 3</div>
                    <div class="genre">Genre1, Genre2, Genre3</div>
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
                <img src="logo512copy.png" alt="Band Photo"></img>
                <h1>Band Name</h1>
                <p class='genre2'>Genre: Rock, Funk, Soul, Jazz, Hip-Hop</p>
                <br/>
                <h2>Description:</h2>
                <p>This band is one of the finest to have ever been but for some reason they keep puting on reunion shows even though they never broke up.</p>
                <h2>Members:</h2>
                <ul>
                    <li><p>Guitar: Stevie Ray Vaughan</p></li>
                    <li class="list"><p>Keyboard Stevie Wonder</p></li>
                    <li class="list"><p>Drummer: Steve Gadd</p></li>
                    <li class="list"><p>Singer: Stevie Nicks</p></li>
                </ul>
                <h2>Follow On:</h2>
                <ul>
                    <li><p>Instagram: @Cool_Band</p></li>
                    <li class="list"><p>Facebook: CoolBandPage</p></li>
                    <li class="list"><p>Youtube: Youtube.com/CoolBand</p></li>
                    <li class="list"><p>Website: www.coolband.com</p></li>
                </ul>
                <h2>Contact to Book:</h2>
                <ul>
                    <li><p>Phone: (xxx) xxx-xxxx</p></li>
                    <li class="list"><p>Email: CoolBand@gmail.com</p></li>
                </ul>
            </Popup>
        </div>
    );
}