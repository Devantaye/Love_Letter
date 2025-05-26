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
        <p class="intro-sub">Hello Le’a, the love of my life. This website is a love letter to you, and I believe it truly captures the love that I have for you. I know you don’t really celebrate stuff like this but I don’t care, I’ll take any and every opportunity to show how much I love you. Happy one month anniversary <3 Click "Begin" to start reading 🥺💕</p>
        <button onclick="nextSection()">Begin</button>
      </div>
    `;
  } else if (num === 1) {
    container.innerHTML = `
      <div class="section" id="section1">
        <h2 class="intro-title">1. The Beginning</h2>
        <p class="intro-sub">We started off as randos on IG, but now you’re one of the most important people in my life and I’ll forever be grateful that you came into my life and made it 1000x better. I don’t know if I’ve told you this but before we first started messaging each other on Instagram, I got giddy seeing your follow request in my inbox LMAO. And yes, I know I had a bunch of fags (like you) following me already at the time but something about your profile stood out to me. I like to think it was the universe’s way of saying “He’s the one” but it could’ve also been how handsome you looked too :). After going back and forth with the liking of each other’s highlights etc I thought “hmm you know what, I’m gonna post a story and see if he’ll slide up :’)” and yup you did HAHAHA but my awkward ass didn’t know how to continue the convo so it just died 💔 Then a few days later I saw your handsome face on your close friends story hehehe. Now normally people would swipe up and say something smart or flirty, but what did I do? Clock you!! Honestly, that sums up our dynamic: I mock you, you mock back, I bully you cause you pmo, you fall in love then I fall even harder. I never knew that one little message could spark such a beautiful romance with you, but I’m glad everything turned out the way it did. Thank you for that :’)</p>
        <img src="assets/images/img1.png" alt="Image 1" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
  } else if (num === 2) {
    container.innerHTML = `
      <div class="section" id="section2">
        <h2 class="intro-title">2. Falling for You</h2>
        <p class="intro-sub">I know I’ve said this countless times but I genuinely have fallen SO HARD for you. It all started with that one call. My anxious ass hates calling with people especially when I don’t know them like that, and yet I still answered your call. I’m glad I did tho, because we went on for HOURS rambling about ourselves and just getting to know each other. Talking with you that night felt easy, I didn’t feel like I needed to put on an act or try and win your approval. I could just be me around you, and I loved that. Banter aside, it was nice to just talk for once with someone. Nah, it was nice just being able to talk to you 🥺 The FaceTime calls that followed warmed my heart, you don’t even understand. I’ve never used FaceTime before, everything felt so new to me but I enjoyed it because I was with you. Being up late, talking on the phone, taking random pics of you cause you looked cute, UGHHHHH I loved every single moment of it. The one night I loved most was when you were out drinking, and we had that heart to heart. Ik it was quite early but I just had to let you know how much you meant to me. The fear of losing you was heavy on my mind, but I wasn’t going to give up this opportunity. The updates you gave were comforting, and falling asleep on call that night felt so surreal, and I slept sooo fricken good :))) (Look how cute u are, drunk rambling about your night then passing out, so cute man)</p>
        <img src="assets/images/img2.png" alt="Image 2" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
  } else if (num === 3) {
    container.innerHTML = `
      <div class="section" id="section3">
        <h2 class="intro-title">3. My Favorite Moments</h2>
        <p class="intro-sub">As we started talking more and more, I started falling for you harder and harder, and that scared me. I never felt this way for someone EVER, and my feelings just kept getting stronger and deeper every moment we talked. I was actually in the middle of working out when I started breaking down. Idk if it was because I wasn’t lifting as much, or if I was just overstimulated by everything but damn, I poured my heart out to you. The thought of what we had disappearing genuinely hurt me, even if we weren’t together I didn’t want to lose you. I didn’t want what we had to be a one time thing, a random situationship or talking stage. I wanted more, I wanted you. So yea, I broke down texting you and I ended up pouring my heart out. During that, the only thought running through my mind was “Yeah, he’s gonna leave after this. Who tf cries over smth so stupid, why are you like this”, little did I know, that wasn’t the case. You gave me reassurance and shut down every single overthinking thought. You helped me calm down, and gave me the space to be real and genuine with you, to be open about my feelings with no judgement at all. After that, I cried even more, because I realised that I loved you.</p>
        <img src="assets/images/img3.png" alt="Image 3" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
  } else if (num === 4) {
    container.innerHTML = `
      <div class="section" id="section4">
        <h2 class="intro-title">4. Thank You</h2>
        <p class="intro-sub">From the bottom of my heart, thank you. Thank you for showing up when I needed you most. In the times I felt anxious and scared, you were there to comfort and reassure me. You didn’t need to do all of that, but you did because you are a kind and genuine person. Thank you for accepting parts of me that I found hard to love. You showered me with love when I felt insecure and self-conscious about a whole bunch of things, and you made me feel safe and secure. Thank you for reminding me that love can be gentle, kind and patient. You showed me that I don’t need to beg for love, that I’ll receive it no matter what. You taught me how to be more loving just by being a perfect example. You are patient with me, take the time out of the day to let me know that you’re here with me and that you’ll always be for me. That healed a heart that you never broke, and for that I’m so thankful. My inner child is happy, because it’s finally receiving the love that it’s been begging to share with another person, and I thank God that the person is you. I’m thankful that you came into my life and made it better, I’m thankful you love me the way you do, I’m thankful that you put up with everything that I do and I’m thankful that you’re the one I gave my heart to. Thank you, Le’a. (Also, thank you for all the sweet messages you send me. This one in particular is my favourite, and you don’t know how happy I was to wake up and read it. Tears in my eyesssss, thank you my love) </p>
        <img src="assets/images/img4.png" alt="Image 4" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
  } else if (num === 5) {
    container.innerHTML = `
      <div class="section" id="section5">
        <h2 class="intro-title">5. The Way You Love</h2>
        <p class="intro-sub">I just want to say that I genuinely appreciate the way you love on me, oh how you make me fall every single time. I love the way you always check up on me and give me random little updates. You make time out of your day to talk to me, and that makes me so happy. Whenever your notifications pop up, I smile. I love the banter that we share, even when I get annoyed with you cause you loveee to piss me off, I still love it. I find it cute when you get clingy, and when you get mad cause I annoy you too. I love that you notice even the little things, when I start to overthink or when something bugs me you’re onto it ASAP. You never let it slide, and always make sure that I’m okay. I love that you gave me a chance, I’m always “let’s talk it out now” and you’re “let’s have some space then talk about it when we are calm” and yet somehow we make it work. Even when it’s not your preferred way of conflict resolution, you still made the effort to try and talk it out even when you knew you were still heated. I know that wasn’t easy, but I’m glad we’ve come to a consensus and what to do, and I love that you were patient enough to talk things out with me. Your love feels special and precious to me, you never take it for granted or treat me like you don’t love me. I feel the love in everything you say and do, and I don’t feel the need to have to beg you to love me, because you already do. You don’t just say you love me, you show that you love me. From the reassurance, to the little compliments you give me to being open and honest about how you feel, I love it all. I love you. I LOVE YOU. I LOVE YOU SOO MUCHH UGHHHH !!!!</p>
        <img src="assets/images/img5.png" alt="Image 5" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
  } else if (num === 6) {
    container.innerHTML = `
      <div class="section" id="section6">
        <h2 class="intro-title">6. When I Miss You</h2>
        <p class="intro-sub">“Long distance is hard, but loving you is easy” is how I feel about you and our relationship. Some days I miss you so much that it physically hurts, I want to be close to you, feeling your embrace, hearing your voice, kissing you till the sun goes down. Long distance is hard, but I’m surviving it because I know that at the end of this road I’ll be living with the love of my life, and I can’t help but smile at that thought. When I miss you, I look back at pictures of you. The random pics you send throughout your day, the off-guard FaceTime pics I have of you, the handsome mirror selfies that you send me, they all make me happy. Old voice notes help with the distance too, hearing you crash out cause I didn’t answer the phone puts a smile on my face. Regardless of this distance tho, I can’t wait to fill up my phone with pictures of us together. When that happens, I can die happy. It’s not easy being so far away from someone I deeply love and care about, but you’re always worth the distance. Missing you just reminds me I’ve found someone worth missing. I can’t wait to see you baby :’)</p>
        <img src="assets/images/img6.png" alt="Image 6" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
  } else if (num === 7) {
    container.innerHTML = `
      <div class="section" id="section7">
        <h2 class="intro-title">7. My Safe Space</h2>
        <p class="intro-sub">YBeing with you feels like taking a deep breath after holding it for too long. With you, I don’t feel like I have to explain every little thing I’m feeling, you just get it. You’ve never made me feel like I’m “too much” or “too sensitive.” You’ve never rushed me to feel better or forced me to open up. You just stay, and that makes me feel safe. You make me feel safe. You let me be silly, soft, tired, sad, annoying or whatever version of me shows up, and you meet it with love. That’s something I’ve never had before. You make me feel like I can let my guard down and still be held, still be loved. That I can drop all facades and just be me around you, the real me. There’s something so rare about that. You’ve become my calm, my softness and my home, and I’ll never stop being thankful for you.</p>
        <img src="assets/images/img7.png" alt="Image 7" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
  } else if (num === 8) {
    container.innerHTML = `
      <div class="section" id="section8">
        <h2 class="intro-title">8. Forever With You</h2>
        <p class="intro-sub">If I died and was put into another timeline, I’d still choose you in every version of my life. I don’t want a perfect relationship, I want something that’s real. That’s what we have, together. Real, genuine love for one another. I want late night calls, I want the “Did you eat?” texts, I want soft forehead kisses after I overthink or get overwhelmed, I want the quiet mornings just cuddled up in bed, I want the chaotic days that feel like a rollercoaster, and the sweet nights where we fall asleep on call. I want you, in all of those forms and many more to come. I know love isn’t always easy and I know we’ll have hard days, weeks and moments that will really test us. But I’m not going anywhere. I want to be the one who stays, who chooses you even when things get rough and life gets heavy. I want to be the one who fights with you, not against you. Who holds your hand through every storm of emotion and leads you to the calm. The distance, the time and the waiting are all worth it because they lead me back to you. I’m not just in this for now, I’m in this for every day after. The future I want has your name written all over it, and there’s no erasing it. No matter what comes next my love, I’m yours. Forever and always 🥺</p>
        <img src="assets/images/img8.png" alt="Image 8" />
        <div><button onclick="prevSection()">Back</button><button onclick="nextSection()">Next</button></div>
      </div>
    `;
    } else if (num === 9) {
    container.innerHTML = `
      <div class="section end">
        <h1 class="intro-title">Forever & Always</h1>
        <p class="intro-sub">Thank you for reading all of this. I meant every word. Happy one month, my love and here’s to many more memories, laughs, and late-night calls with you. I love you, always and forever. -Vante </p>
        <div class="heart2-img"></div>
        <button onclick="loadSection(0)">Read Again</button>
      </div>
    `;
  }

}
