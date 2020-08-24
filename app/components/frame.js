import Component from '@glimmer/component';
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

    constructor() {
      super(...arguments)
      this.sqrtPixels = Math.sqrt(this.args.pixels.length);
      this.trackedPixels = this.args.pixels.map((pixel) => { return new TrackedPixel(pixel)})
    }

    @action
    updatePixelColor(pixel) {
        pixel.color = this.args.selectedColor;
    }
}
   
