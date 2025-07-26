import Data from "./Data"
import Popup from "./Components/Popup"
import { useState } from 'react';
export default function Shops() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return(
        <div>
            <p class="space">space</p>
            <h1>Music Shops/Repair Specilist</h1>
            <div class="gallery">
                <a target="_blank">
                    <img src="/public/img_logo192.png" alt="Shop Image" width="600" height="400"></img>
                    <button onClick={() => setButtonPopup(true)} class='btn'>Shop</button>
                </a>
                <div class="icon-band">
                    <div class="desc">Shop One</div>
                    <div class="genre">Instrument1, Instrument2, Instrument3</div>
                </div>
                <br/>
            </div>
            <div class="gallery">
                <a target="_blank">
                    <img src="img_logo192.png" alt="Shop Image" width="600" height="400"></img>
                    <button onClick={() => setButtonPopup(true)} class='btn'>Shop</button>
                </a>
                <div class="icon-band">
                    <div class="desc">Shop Two</div>
                    <div class="genre">Instrument1, Instrument2, Instrument3</div>
                </div>
                <br/>
            </div>
            <div class="gallery">
                <a target="_blank">
                    <img src="img_logo192.png" alt="Shop Image" width="600" height="400"></img>
                    <button onClick={() => setButtonPopup(true)} class='btn'>Shop</button>
                </a>
                <div class="icon-band">
                    <div class="desc">Shop 3</div>
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
                <img src="/Photos/logo512copy.png" alt="Band Photo"></img>
                <h1>Shop Name</h1>
                <p class='genre2'>Specialty: Guitars, Electric Pianos, Violins, Brass</p>
                <br/>
                <h2>Description:</h2>
                <p>This local shop has been a staple of the local music comunity for 3 generations with a staff who is awlways helpful in asnwering any instrument related questions.</p>
                <h2>Instruments for Sale:</h2> <p>Guitars, Violins, Trumpets, Trombones, Rhodes, Yamaha Keyboards.</p>
                <h2>Repair Specialties:</h2> <p>Acoustic Guitars, Brass Instruments.</p>
                <h2>Brands Carried:</h2> <p>Brand1, Brand2, Brand3</p>
                <h2>Contact Info:</h2>
                <ul>
                    <li><p>Phone: (xxx) xxx-xxxx</p></li>
                    <li class="list"><p>Email: Store@gmail.com</p></li>
                </ul>
                <h2>Address:</h2> <p>XXXXX Music Store Ln. Spokane, WA, XXXXX</p>
                <h2>Hours of Operation:</h2> <p>10:00 am.- 8:00 pm. (TWThFS)</p>
            </Popup>
        </div>
    );
}