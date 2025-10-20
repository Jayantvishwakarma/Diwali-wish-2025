   const audio = document.getElementById('bgMusic');

    window.addEventListener('load', async () => {
      try {
        // Start muted (autoplay allowed this way)
        audio.volume = 0;
        audio.muted = true;
        await audio.play();
        console.log("Muted autoplay started ✅");

        // Unmute and fade-in volume smoothly
        audio.muted = false;
        let vol = 0;
        const fade = setInterval(() => {
          if (vol < 1) {
            vol += 0.05;
            audio.volume = vol;
          } else {
            clearInterval(fade);
          }
        }, 200); // fade over ~4 seconds
      } catch (e) {
        console.warn("Autoplay blocked 🚫", e);
      }
    });