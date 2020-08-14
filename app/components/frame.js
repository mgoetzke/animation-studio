import Component from '@ember/component';
import { action, set } from '@ember/object';
export default class FrameComponent extends Component {
    tagName = ''
    sqrtPixels = null;

    init() {
      super.init(...arguments)
      this.sqrtPixels = Math.sqrt(this.pixels.length);
    }

    @action
    updatePixelColor(pixelIndex) {
        const newColor = this.paletteColor;
        const newPixels = [...this.pixels];
        newPixels[pixelIndex] = newColor;
        set(this, 'pixels', newPixels);
    }
}
   
