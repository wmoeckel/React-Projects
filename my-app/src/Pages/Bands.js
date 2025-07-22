import Data from "Data"
export default function Bands() {
    return(
        <div>
            <p class="space">space</p>
            <h1>Bands</h1>
                <div class="gallery">
                <a target="_blank" href="img_5terre.jpg">
                    <img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
                </a>
                <div class="desc">{name1}</div>
            </div>
            <div class="footer">
                    <h2>Contact:</h2>
                    <ul>
                        <li><p>Email: musicscene@gmail.com</p></li>
                        <li class="list"><p>Instagram: @Music_Scene</p></li>
                    </ul>
            </div>
        </div>
    );
}