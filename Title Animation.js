
        const messages = [
          "⚔️ WiaYouHi: Awakening",
          "✨ thanawat.wia Activated",
          "🔥 LEVEL UP DETECTED",
          "💥 Power Sync Complete",
          "🧬 IG: Thanawat.wia"
        ];
        
        const effects = ["typing", "glitch", "scroll", "wave"];
        let currentMessage = 0;
        let interval;
        let animationInProgress = false;
        
        function startRandomEffect() {
          if (animationInProgress) return;
          animationInProgress = true;
        
          const effect = effects[Math.floor(Math.random() * effects.length)];
          const message = messages[currentMessage];
          currentMessage = (currentMessage + 1) % messages.length;
        
          if (effect === "typing") return typingEffect(message);
          if (effect === "glitch") return glitchEffect(message);
          if (effect === "scroll") return scrollEffect(message);
          if (effect === "wave") return waveEffect(message);
        }
        
        // Typing Effect
        function typingEffect(text) {
          let i = 0;
          const step = () => {
            document.title = text.substring(0, i) + "_";
            i++;
            if (i <= text.length) {
              setTimeout(step, 60);
            } else {
              setTimeout(() => {
                animationInProgress = false;
                startRandomEffect();
              }, 1500);
            }
          };
          step();
        }
        
        // Glitch Effect
        function glitchEffect(text) {
          const glitchChars = "!@#$%^&*()_+=<>?/|\\~";
          let count = 0;
          const max = 15;
          const glitch = () => {
            const glitched = text
              .split("")
              .map((c) => (Math.random() < 0.25 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : c))
              .join("");
            document.title = glitched;
            count++;
            if (count < max) {
              setTimeout(glitch, 70);
            } else {
              document.title = text;
              setTimeout(() => {
                animationInProgress = false;
                startRandomEffect();
              }, 1500);
            }
          };
          glitch();
        }
        
        // Scroll Effect
        // Scroll Effect
function scrollEffect(text) {
  let msg = "   " + text + "   ";
  let i = 0;
  let scrollCycles = 0;
  const maxCycles = 3; // จำนวนรอบที่ต้องการ

  const scroll = () => {
    document.title = msg.substring(i) + msg.substring(0, i);
    i = (i + 1) % msg.length;

    if (i === 0) scrollCycles++; // เมื่อวนจบ 1 รอบ

    if (scrollCycles < maxCycles) {
      setTimeout(scroll, 120);
    } else {
      setTimeout(() => {
        animationInProgress = false;
        startRandomEffect();
      }, 1000);
    }
  };
  scroll();
}

        
        // Wave Effect
        function waveEffect(text) {
          let index = 0;
          const wave = () => {
            let result = "";
            for (let i = 0; i < text.length; i++) {
              result += i === index ? text[i].toUpperCase() : text[i];
            }
            document.title = result;
            index++;
            if (index < text.length) {
              setTimeout(wave, 100);
            } else {
              setTimeout(() => {
                animationInProgress = false;
                startRandomEffect();
              }, 1200);
            }
          };
          wave();
        }
        
        startRandomEffect();
