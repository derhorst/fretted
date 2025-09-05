import { Injectable } from '@angular/core';
import { PitchDetector } from 'pitchy';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PitchDetectorService {
  private audioContext = new window.AudioContext();
  private analyserNode = this.audioContext.createAnalyser();

  pitch: ReplaySubject<number> = new ReplaySubject(5)

  constructor() { }
  
  start() {
    this.audioContext.resume()

    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      this.audioContext.createMediaStreamSource(stream).connect(this.analyserNode);
      const detector = PitchDetector.forFloat32Array(this.analyserNode.fftSize);
      detector.minVolumeDecibels = -10;
      const input = new Float32Array(detector.inputLength);
      this.updatePitch(this.analyserNode, detector, input, this.audioContext.sampleRate);
    });
  }

  updatePitch(analyserNode: AnalyserNode, detector: PitchDetector<Float32Array>, input: Float32Array<ArrayBuffer>, sampleRate: number) {
    analyserNode.getFloatTimeDomainData(input);
    const [pitch, clarity] = detector.findPitch(input, sampleRate);
    if (clarity > 0.75) {
      this.pitch.next(pitch);
    }
    window.setTimeout(
      () => this.updatePitch(analyserNode, detector, input, sampleRate),
      100,
    );
  }
}
