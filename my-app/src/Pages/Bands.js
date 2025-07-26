import Data from "./Data"
export default function Bands() {
    return(
        <div>
            <p class="space">space</p>
            <h1>Bands</h1>
                <div class="gallery">
                <a target="_blank" href="img_logo192.png">1
                    <img src="img_logo192.png" alt="logo192" width="600" height="400"></img>
                </a>
                <div class="desc">Band Name</div>
                <div class="genre">Genre</div>
            </div>
            <p class="space">space</p>
            <p class="space">space</p>
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