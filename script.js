let currentSection = 0;
const totalSections = 10;

window.addEventListener('click', () => {
  const audio = document.querySelector('audio');
  if (audio && audio.paused) {
    audio.play();
  }
});


function nextSection() {
  if (currentSection < totalSections - 1) {
    currentSection++;
    loadSection(currentSection);
  }
}

function prevSection() {
  if (currentSection > 0) {
    currentSection--;
    loadSection(currentSection);
  }
}

function loadSection(num) {
  const container = document.getElementById('mainContainer');

   const audio = document.getElementById('bg-music');
  if (num === 0 && audio && audio.paused) {
    audio.play().catch(() => {
      document.addEventListener('click', () => {
        audio.play();
      }, { once: true });
    });
  }

  if (num === 0) {
    
    container.innerHTML = `
      <div class="section intro">
        <div class="heart-img"></div>
        <h1 class="intro-title">Hi Love!</h1>
        <p class="intro-sub">I made this little website just for you. It’s more than a letter—it’s a journey through my heart, one page at a time. Click "Begin" to start reading 🥺💕</p>
        <button onclick="nextSection()">Begin</button>
      </div>
    `;
  } else if (num === 1) {
    container.innerHTML = `
      <div class="section" id="section1">
        <h2 class="intro-title">1. The Beginning</h2>
        <p class="intro-sub">From the very start, I knew there was something different about you. The way we connected so effortlessly made me feel like the universe aligned just for us. Even back then, I had no idea just how much you’d come to mean to me.</p>
        <img src="assets/images/img1.png" alt="Image 1" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
  } else if (num === 2) {
    container.innerHTML = `
      <div class="section" id="section2">
        <h2 class="intro-title">2. Falling for You</h2>
        <p class="intro-sub">Somewhere along the way, I found myself smiling more, laughing deeper, and thinking about you constantly. I didn’t expect to fall so hard, but I did. And every part of me is so glad I did.</p>
        <img src="assets/images/img2.png" alt="Image 2" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
  } else if (num === 3) {
    container.innerHTML = `
      <div class="section" id="section3">
        <h2 class="intro-title">3. My Favorite Moments</h2>
        <p class="intro-sub">Some of my favorite memories aren’t grand—they’re small moments, like your voice on call, your texts at night, or the way we send each other TikToks like it’s our love language. Every moment with you is my favorite.</p>
        <img src="assets/images/img3.png" alt="Image 3" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
  } else if (num === 4) {
    container.innerHTML = `
      <div class="section" id="section4">
        <h2 class="intro-title">4. Thank You</h2>
        <p class="intro-sub">Thank you for being kind, patient, silly, and honest. Thank you for seeing me even when I’m not at my best. You make me feel safe, seen, and loved—and I’ve never had that before.</p>
        <img src="assets/images/img4.png" alt="Image 4" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
  } else if (num === 5) {
    container.innerHTML = `
      <div class="section" id="section5">
        <h2 class="intro-title">5. The Way You Love</h2>
        <p class="intro-sub">You love with intention. You pay attention to the details. You notice the things I don’t even know I need. It’s in the little things you do that I feel your love most deeply—and that’s what makes it so special.</p>
        <img src="assets/images/img5.png" alt="Image 5" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
  } else if (num === 6) {
    container.innerHTML = `
      <div class="section" id="section6">
        <h2 class="intro-title">6. When I Miss You</h2>
        <p class="intro-sub">Long distance is hard, but loving you is easy. Even when we’re miles apart, I feel close to you. You’re in my thoughts, in my heart, and in every love song I hear.</p>
        <img src="assets/images/img6.png" alt="Image 6" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
  } else if (num === 7) {
    container.innerHTML = `
      <div class="section" id="section7">
        <h2 class="intro-title">7. My Safe Space</h2>
        <p class="intro-sub">You make me feel understood. I don’t have to hide parts of myself with you. You give me space to be soft, silly, emotional—and that means more to me than you’ll ever know.</p>
        <img src="assets/images/img7.png" alt="Image 7" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
  } else if (num === 8) {
    container.innerHTML = `
      <div class="section" id="section8">
        <h2 class="intro-title">8. Forever With You</h2>
        <p class="intro-sub">I think about our future and I smile. I see us doing the mundane things together—grocery shopping, dancing in the kitchen, cuddling after a long day—and I know in my soul: I want it all with you.</p>
        <img src="assets/images/img8.png" alt="Image 8" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
    } else if (num === 9) {
    container.innerHTML = `
      <div class="section end">
        <h1 class="intro-title">Forever & Always</h1>
        <p class="intro-sub">That’s the end of this little journey, but never the end of how much I love you. You’re my person, and I can’t wait for all the memories we’ve yet to make 💖</p>
        <div class="heart2-img"></div>
        <button onclick="loadSection(0)">Read Again</button>
      </div>
    `;
  }

}
