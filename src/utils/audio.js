// Web Audio API Professional Gamification Sound Engine with Master Dynamic Compressor

let audioCtx = null;
let masterCompressor = null;
let masterGain = null;
let radioTimer = null;
let radioGain = null;
let isRadioActive = false;

export function getAudioContext() {
  if (typeof window === 'undefined') return null;
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;
  if (!audioCtx) {
    audioCtx = new AudioCtx();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }

  // Setup Master Limiter & Compressor Chain for Loud, Punchy, Distortion-free Audio
  if (!masterGain && audioCtx) {
    try {
      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(1.0, audioCtx.currentTime);

      masterCompressor = audioCtx.createDynamicsCompressor();
      masterCompressor.threshold.setValueAtTime(-14, audioCtx.currentTime);
      masterCompressor.knee.setValueAtTime(12, audioCtx.currentTime);
      masterCompressor.ratio.setValueAtTime(6, audioCtx.currentTime);
      masterCompressor.attack.setValueAtTime(0.003, audioCtx.currentTime);
      masterCompressor.release.setValueAtTime(0.2, audioCtx.currentTime);

      masterGain.connect(masterCompressor);
      masterCompressor.connect(audioCtx.destination);
    } catch {
      // Fallback direct routing
    }
  }

  return audioCtx;
}

function getDestination(ctx) {
  return masterGain || ctx.destination;
}

/**
 * Play loud, punchy, studio-grade AAA retro gamification UI sound effects
 */
export function playSoundEffect(type = 'select') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const dest = getDestination(ctx);
    const now = ctx.currentTime;

    if (type === 'hover') {
      // Crisp snappy arcade menu blip
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(659.25, now); // E5
      osc.frequency.exponentialRampToValueAtTime(987.77, now + 0.03); // B5
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);
      osc.connect(gain);
      gain.connect(dest);
      osc.start(now);
      osc.stop(now + 0.04);

    } else if (type === 'card_hover') {
      // Clean tactile magnetic tick for cards & badges
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.025);
      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);
      osc.connect(gain);
      gain.connect(dest);
      osc.start(now);
      osc.stop(now + 0.035);

    } else if (type === 'select') {
      // Loud, punchy GTA VI / Vice City mission select chord & sub-thump
      // Tone 1: Lead triangle synth chime
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(523.25, now); // C5
      osc1.frequency.setValueAtTime(783.99, now + 0.045); // G5
      osc1.frequency.setValueAtTime(1046.50, now + 0.09); // C6
      gain1.gain.setValueAtTime(0.32, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
      osc1.connect(gain1);
      gain1.connect(dest);
      osc1.start(now);
      osc1.stop(now + 0.25);

      // Tone 2: Warm punchy sub bass body
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(180, now);
      osc2.frequency.exponentialRampToValueAtTime(55, now + 0.14);
      gain2.gain.setValueAtTime(0.38, now);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc2.connect(gain2);
      gain2.connect(dest);
      osc2.start(now);
      osc2.stop(now + 0.16);

    } else if (type === 'back') {
      // Resonant retro reverse pitch drop
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.09);
      gain.gain.setValueAtTime(0.26, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.095);
      osc.connect(gain);
      gain.connect(dest);
      osc.start(now);
      osc.stop(now + 0.1);

    } else if (type === 'modal_open') {
      // Futuristic cyber HUD terminal access sweep
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(320, now);
      osc1.frequency.exponentialRampToValueAtTime(1280, now + 0.12);
      gain1.gain.setValueAtTime(0.28, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.15);
      osc1.connect(gain1);
      gain1.connect(dest);
      osc1.start(now);
      osc1.stop(now + 0.16);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(880, now + 0.04);
      osc2.frequency.setValueAtTime(1480, now + 0.09);
      gain2.gain.setValueAtTime(0.24, now + 0.04);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
      osc2.connect(gain2);
      gain2.connect(dest);
      osc2.start(now + 0.04);
      osc2.stop(now + 0.19);

    } else if (type === 'modal_close') {
      // Soft cyber power-down hush
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.1);
      gain.gain.setValueAtTime(0.24, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
      osc.connect(gain);
      gain.connect(dest);
      osc.start(now);
      osc.stop(now + 0.12);

    } else if (type === 'star' || type === 'achievement') {
      // Shimmering golden victory fanfare (C5 -> E5 -> G5 -> B5 -> C6)
      const freqs = [523.25, 659.25, 783.99, 987.77, 1046.50];
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const noteStart = now + idx * 0.04;
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, noteStart);
        gain.gain.setValueAtTime(0.28, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.22);
        osc.connect(gain);
        gain.connect(dest);
        osc.start(noteStart);
        osc.stop(noteStart + 0.23);
      });

    } else if (type === 'dispatch') {
      // Cyber transmission telemetry chime sequence
      const tones = [880, 1174.66, 1760, 2093];
      tones.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const noteStart = now + idx * 0.05;
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteStart);
        gain.gain.setValueAtTime(0.30, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.14);
        osc.connect(gain);
        gain.connect(dest);
        osc.start(noteStart);
        osc.stop(noteStart + 0.15);
      });

    } else if (type === 'tab_switch') {
      // Precision UI tab switch click
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(740, now);
      osc.frequency.setValueAtTime(1046.50, now + 0.03);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
      osc.connect(gain);
      gain.connect(dest);
      osc.start(now);
      osc.stop(now + 0.075);

    } else if (type === 'toggle') {
      // Punchy mechanical switch click
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1300, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.035);
      gain.gain.setValueAtTime(0.26, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
      osc.connect(gain);
      gain.connect(dest);
      osc.start(now);
      osc.stop(now + 0.04);
    }
  } catch {
    // Graceful fallback if audio blocked
  }
}

/**
 * 80s Miami Vice / Vice City FM Radio Synthesizer
 * Plays an authentic retro ambient synth chord progression with lowpass filter
 */
export function startRadioSynth() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    if (isRadioActive) return;
    isRadioActive = true;
    const dest = getDestination(ctx);

    // Master radio gain node
    radioGain = ctx.createGain();
    radioGain.gain.setValueAtTime(0.18, ctx.currentTime);

    // Warm vintage lowpass filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1600, ctx.currentTime);
    filter.Q.setValueAtTime(2.5, ctx.currentTime);

    radioGain.connect(filter);
    filter.connect(dest);

    // 80s Synth chord progression: Am -> F -> C -> G
    const chords = [
      [220.00, 261.63, 329.63, 440.00], // A minor (A3, C4, E4, A4)
      [174.61, 220.00, 261.63, 349.23], // F Major (F3, A3, C4, F4)
      [261.63, 329.63, 392.00, 523.25], // C Major (C4, E4, G4, C5)
      [196.00, 246.94, 293.66, 392.00], // G Major (G3, B3, D4, G4)
    ];

    let chordIdx = 0;
    let noteIdx = 0;

    const playArpNote = () => {
      if (!isRadioActive || !ctx || ctx.state === 'closed') return;
      try {
        const chord = chords[chordIdx];
        const freq = chord[noteIdx];

        const osc = ctx.createOscillator();
        const noteGain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        // Analog detune
        osc.detune.setValueAtTime((Math.random() - 0.5) * 8, ctx.currentTime);

        noteGain.gain.setValueAtTime(0.20, ctx.currentTime);
        noteGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);

        osc.connect(noteGain);
        noteGain.connect(radioGain);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.28);

        noteIdx++;
        if (noteIdx >= chord.length) {
          noteIdx = 0;
          chordIdx = (chordIdx + 1) % chords.length;
        }
      } catch {
        // Ignore audio playback glitch
      }
    };

    playArpNote();
    radioTimer = setInterval(playArpNote, 240);
  } catch {
    // Fallback if audio fails
  }
}

export function stopRadioSynth() {
  isRadioActive = false;
  if (radioTimer) {
    clearInterval(radioTimer);
    radioTimer = null;
  }
  if (radioGain && audioCtx) {
    try {
      radioGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.1);
      setTimeout(() => {
        if (radioGain) {
          radioGain.disconnect();
          radioGain = null;
        }
      }, 120);
    } catch {
      radioGain = null;
    }
  }
}
