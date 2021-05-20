class Sound {
  _startContext() {
    if (!this.context) {
      this.context = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  play(freq) {
    this._startContext();

    const osc = this.context.createOscillator();
    osc.type = 'triangle';
    
    osc.connect(this.context.destination);
    osc.frequency.setValueAtTime(freq, this.context.currentTime)

    osc.start(this.context.currentTime);
    osc.stop(this.context.currentTime + 0.6);
  }
}

export default Sound;