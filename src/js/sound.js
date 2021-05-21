class Sound {
  _startContext() {
    if (!this.context) {
      this.context = new (window.AudioContext || window.webkitAudioContext)();
      this.gain = this.context.createGain();
      this.gain.connect(this.context.destination)
    }
  }

  play(freq) {
    this._startContext();
    console.log(this.context)
    const osc = this.context.createOscillator();
    osc.type = 'triangle';
    
    osc.connect(this.gain);
    osc.frequency.setValueAtTime(freq, this.context.currentTime)

    if (this.prevOsc) this.prevOsc.stop();
    
    osc.start(this.context.currentTime);
    osc.stop(this.context.currentTime + 0.6);

    this.prevOsc = osc;
  }
}

export default Sound;