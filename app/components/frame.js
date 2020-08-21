import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';


class TrackedPixel {
  @tracked color;

  constructor(color) {
    this.color = color;
  }
}
export default class FrameComponent extends Component {
    tagName = ''
    sqrtPixels = null;
    trackedPixels = null;

    init() {
      super.init(...arguments)
      this.sqrtPixels = Math.sqrt(this.pixels.length);
      this.trackedPixels = this.pixels.map((pixel) => { return new TrackedPixel(pixel)})
    }

    @action
    updatePixelColor(pixel) {
        pixel.color = this.selectedColor;
    }
}
   
