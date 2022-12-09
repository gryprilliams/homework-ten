var homeContent = `<div class="home">
<section class="hero">
    <div class="herotxt1">
        <h1>travel-fly</h1>
    </div>
    <div class="herotxt2">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae officia adipisci.</p>
    </div>
    <div>
        <input type="submit" class="readmore" value="READ MORE">
    </div>
</section>
<section class="promo-trips">
    <div class="israel">
        <div class="israeltxt1">
            <h1>ISRAEL</h1>
        </div>
        <div class="israeltxt2">
            <p>from $1000</p>
        </div>
        <div class="learnmore">
            <input type="submit" class="learnmore" value="LEARN MORE">
        </div>
    </div>
    <div class="usa">
        <div class="usatxt1">
            <h1>U.S.A.</h1>
        </div> 
        <div class="usatxt2">
            <p>from $1500</p>
        </div>
        <div class="learnmore">
            <input type="submit" class="learnmore" value="LEARN MORE">
        </div>
    </div>
    <div class="australia">
        <div class="australiatxt1">
            <h1>AUSTRALIA</h1>
        </div> 
        <div class="australiatxt2">
            <p>from $1800</p>
        </div>
        <div class="learnmore">
            <input type="submit" class="learnmore" value="LEARN MORE">
        </div> 
</section>
<section class="booking">
    <h1>Booking Form</h1>
    <div class="form">
        <form>
            <div class="textInputs1">
                <input type="text" placeholder="name..." id="name">
                <input type="text" placeholder="email..." id="email">
            </div>
            <div class="textInputs1">
                <input type="text" placeholder="country..." id="country">
                <input type="text" placeholder="hotel..." id="hotel">
            </div>
            <div class="textInputs2">
                <label for="check-in">
                    <h2>Check-in</h2>
                </label>
                <input type="text" id="checkin">
                <label for="check-out">
                    <h2>Check-out</h2>
                </label>
                <input type="text" id="checkout">
            </div>
            <div class="textInputs3">
                <label for="adult">
                    <h2>Adult</h2>
                </label>
                <input type="text" id="adult">
                <label for="children">
                    <h2>Children</h2>
                </label>
                <input type="text" id="children">
                <label for="rooms">
                    <h2>Rooms</h2>
                </label>
                <input type="text" id="rooms">
            </div>
            <div class="textInputs4">
                <input type="text" placeholder="message..." id="message">
            </div>
            <div class="submitbtn">
                <input type="submit" class="submit" value="SUBMIT">
            </div>
        </form>
    </div>
</section>
</div>`;
var aboutContent = `
      <div class="about">
            <section class="aboutheader">
                  <h1>ABOUT:</h1>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
            </section>
            <section class="clientquotes">
                  <h1>CLIENT QUOTES:</h1>
                  <div class="splitdiv">
                        <div class="client1"></div>
                        <div class="quote">
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                              <p class="clientname">-Miranda Brown</p>
                        </div>
                  </div>
                  <div class="splitdiv">
                        <div class="client2"></div>
                        <div class="quote">
                              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                              <p class="clientname">-Jonathan Wes</p>
                        </div>
                  </div>
            </section>
    </div>`;
var toursContent = `<div class="tours">
<section class="tourhero">
    <h1>TOURS:</h1>
</section>
<section class="tourpackages">
    <div class="israel">
        <h2>Israel</h2>
        <p>from $1000</p>
        <div id="tourslink" class="learnmore">
            <a id="israel" href="#">
                <input type="submit" class="learnmore" value="LEARN MORE">
            </a>
        </div>
    </div>
    <div class="usa">
        <h2>U.S.A.</h2>
        <p>from $1500</p>
        <div class="learnmore">
            <a href="#">
                <input type="submit" class="learnmore" value="LEARN MORE">
            </a>
        </div>
    </div>
    <div class="australia">
        <h2>Australia</h2>
        <p>from $1800</p>
        <div id="tourslink" class="learnmore">
            <a id="australia" href="#">
                <input type="submit" class="learnmore" value="LEARN MORE">
            </a>
        </div>
    </div>
    <div class="newzealand">
        <h2>New Zealand</h2>
        <p>from $1200</p>
        <div class="learnmore">
            <a href="#">
                <input type="submit" class="learnmore" value="LEARN MORE">
            </a>
        </div>
    </div>
    <div class="france">
        <h2>France</h2>
        <p>from $2500</p>
        <div class="learnmore">
            <a href="#">
                <input type="submit" class="learnmore" value="LEARN MORE">
            </a>
        </div>
    </div>
    <div class="egypt">
        <h2>Egypt</h2>
        <p>from $900</p>
        <div class="learnmore">
            <a href="#">
                <input type="submit" class="learnmore" value="LEARN MORE">
            </a>
        </div>
    </div>
    <div class="japan">
        <h2>Japan</h2>
        <p>from $1300</p>
        <div class="learnmore">
            <a href="#">
                <input type="submit" class="learnmore" value="LEARN MORE">
            </a>
        </div>
    </div>
    <div class="canada">
        <h2>Canada</h2>
        <p>from $2000</p>
        <div class="learnmore">
            <a href="#">
                <input type="submit" class="learnmore" value="LEARN MORE">
            </a>
        </div>
    </div>
    <div class="uae">
        <h2>U.A.E.</h2>
        <p>from $3000</p>
        <div class="learnmore">
            <a href="#S">
                <input type="submit" class="learnmore" value="LEARN MORE">
            </a>
        </div>
    </div>
</section>
</div>`;
var israelContent = `<div class="packages">
<section class="israelhero">
    <h1>Israel Tour Package:</h1>
    <p>STARTING FROM $1000 (prices may vary)</p>
</section>
<section class="israelimages">
    <div class="israel1"></div>
    <div class="israel2"></div>
    <div class="israel3"></div>
</section>
<section class="trip-plan">
    <div class="plancontainer">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
    </div>
</section>
<section class="booknow">
    <input type="submit" class="booknow" value="BOOK NOW">
</section>
</div>`;
var usaContent = `    <div class="packages">
<section class="usahero">
    <h1>U.S.A. Tour Package:</h1>
    <p>STARTING FROM $1500 (prices may vary)</p>
</section>
<section class="usaimages">
    <div class="usa1"></div>
    <div class="usa2"></div>
    <div class="usa3"></div>
</section>
<section class="trip-plan">
    <div class="plancontainer">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
    </div>
</section>
<section class="booknow">
    <input type="submit" class="booknow" value="BOOK NOW">
</section>
</div>`;
var australiaContent = `    <div class="packages">
<section class="australiahero">
    <h1>Australia Tour Package:</h1>
    <p>STARTING FROM $1800 (prices may vary)</p>
</section>
<section class="australiaimages">
    <div class="australia1"></div>
    <div class="australia2"></div>
    <div class="australia3"></div>
</section>
<section class="trip-plan">
    <div class="plancontainer">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
    </div>
</section>
<section class="booknow">
    <input type="submit" class="booknow" value="BOOK NOW">
</section>
</div>`;
var newzealandContent = `<div class="packages">
<section class="newzealandhero">
    <h1>New Zealand Tour Package:</h1>
    <p>STARTING FROM $1200 (prices may vary)</p>
</section>
<section class="newzealandimages">
    <div class="newzealand1"></div>
    <div class="newzealand2"></div>
    <div class="newzealand3"></div>
</section>
<section class="trip-plan">
    <div class="plancontainer">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
    </div>
</section>
<section class="booknow">
    <input type="submit" class="booknow" value="BOOK NOW">
</section>
</div>`;
var franceContent = `    <div class="packages">
<section class="francehero">
    <h1>France Tour Package:</h1>
    <p>STARTING FROM $2500 (prices may vary)</p>
</section>
<section class="franceimages">
    <div class="france1"></div>
    <div class="france2"></div>
    <div class="france3"></div>
</section>
<section class="trip-plan">
    <div class="plancontainer">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
    </div>
</section>
<section class="booknow">
    <input type="submit" class="booknow" value="BOOK NOW">
</section>
</div>`;
var egyptContent = `    <div class="packages">
<section class="egypthero">
    <h1>Egypt Tour Package:</h1>
    <p>STARTING FROM $900 (prices may vary)</p>
</section>
<section class="egyptimages">
    <div class="egypt1"></div>
    <div class="egypt2"></div>
    <div class="egypt3"></div>
</section>
<section class="trip-plan">
    <div class="plancontainer">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
    </div>
</section>
<section class="booknow">
    <input type="submit" class="booknow" value="BOOK NOW">
</section>
</div>`;
var japanContent = `<div class="packages">
<section class="japanhero">
    <h1>Japan Tour Package:</h1>
    <p>STARTING FROM $1300 (prices may vary)</p>
</section>
<section class="japanimages">
    <div class="japan1"></div>
    <div class="japan2"></div>
    <div class="japan3"></div>
</section>
<section class="trip-plan">
    <div class="plancontainer">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
    </div>
</section>
<section class="booknow">
    <input type="submit" class="booknow" value="BOOK NOW">
</section>
</div>`;
var canadaContent = `<div class="packages">
<section class="canadahero">
    <h1>Canada Tour Package:</h1>
    <p>STARTING FROM $2000 (prices may vary)</p>
</section>
<section class="canadaimages">
    <div class="canada1"></div>
    <div class="canada2"></div>
    <div class="canada3"></div>
</section>
<section class="trip-plan">
    <div class="plancontainer">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
    </div>
</section>
<section class="booknow">
    <input type="submit" class="booknow" value="BOOK NOW">
</section>
</div>`;
var uaeContent = `<div class="packages">
<section class="uaehero">
    <h1>U.A.E. Tour Package:</h1>
    <p>STARTING FROM $3000 (prices may vary)</p>
</section>
<section class="uaeimages">
    <div class="uae1"></div>
    <div class="uae2"></div>
    <div class="uae3"></div>
</section>
<section class="trip-plan">
    <div class="plancontainer">
        <h1>Day #1:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #2:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
        <h1>Day #3:</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</p>
    </div>
</section>
<section class="booknow">
    <input type="submit" class="booknow" value="BOOK NOW">
</section>
</div>`;
var specialoffersContent = `<section class="offers">
<div class="title">
    <h1>SPECIAL OFFER(S):</h1>
</div>
<div class="offers-splitdiv">
    <div class="spainpic">
    </div>
    <div class="offerstxt">
        <h1>BARCELONA, SPAIN</h1>
        <h2>(20% off!)</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        <div class="learnmore">
            <a href="#">
                <input type="submit" class="learnmore" value="LEARN MORE">
            </a>
        </div>
    </div>
</div>
<div class="offers-splitdiv">
    <div class="thailandpic">
    </div>
    <div class="offerstxt">
        <h1>BANGKOK, THAILAND</h1>
        <h2>(10% off!)</h2>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        <div class="learnmore">
            <a href="#">
                <input type="submit" class="learnmore" value="LEARN MORE">
            </a>
        </div>
    </div>
</div>
</section>`;
var blogContent = `<section class="blog">
<div class="title">
    <h1>BLOG:</h1>
</div>
<div class="blog-container">
    <div class="date">
        <h1>06</h1>
        <p>JUN</p>
    </div>
    <div class="post1">
        <div class="blogpic"></div>
        <div class="blogtxt">
            <h2>Sed et persipiatis unde omnis iste natus</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </div>
    </div>
</div>
<div class="blog-container">    
    <div class="date">
        <h1>23</h1>
        <p>JUL</p>
    </div>
    <div class="post2">
        <div class="blogpic"></div>
        <div class="blogtxt">
            <h2>Sed et persipiatis unde omnis iste natus</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
        </div>
    </div>
</div>    
</section>`;
var contactContent = `<section class="contact">
<div class="title">
    <h1>CONTACT US:</h1>
</div>
<div class="contactcontainer">
    <div class="map"></div>
    <div class="form">
        <input type="text" class="txtsub1" placeholder="Your Name...">
        <input type="text" class="txtsub1" placeholder="Email Address...">
        <input type="text" class="txtsub1" placeholder="Company...">
        <input type="text" class="txtsub2" placeholder="Message...">
    </div>
</div>
<div class="contactcontainer">
    <div class="address">
        <p>travel-fly Inc.</p>
        <p>8901 Marmora Road,</p>
        <p>Glasgow, DO4 89GR.</p>
        <p>Freephone:+1 800 559 6580</p>
        <p>Telephone:+1 800 603 6035</p>
        <p>FAX:+1 800 889 9898</p>
        <p>E-mail: mail@travelfly.org</p>
    </div>
    <div class="sendmessage">
        <input type="submit" class="sendmessage" value="SEND MESSAGE">
    </div>
</div>
</section>`;

export function changePageContent(btnID){
      let pageName = btnID + "Content";
      //console.log(pageName);
      $(app).html(eval(pageName));
      //if(pageID == "home")
}