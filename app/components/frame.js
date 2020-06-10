import Component from '@ember/component';
import { action, set, computed } from '@ember/object';
export default class FrameComponent extends Component {
    tagName= ''

    @computed('pixels')  
    get pixelRows() {
        const indexedPixels = this.pixels.map((pixel, index) => { 
            return {'color': pixel, index}
        })
        const totalPixels = this.pixels.length;
        const rowSize = Math.sqrt(totalPixels);
        const rows = [];

        while (rows.length*rowSize < totalPixels) {
            const startIndex = rows.length*rowSize;
            const endIndex = startIndex + rowSize;
            const pixelSlice = indexedPixels.slice(startIndex, endIndex);
            rows.push(pixelSlice);
        }
        return rows;      
    }

    @action
    updatePixelColor(pixelIndex) {
        const newColor = this.paletteColor;
        const newPixels = [...this.pixels];
        newPixels[pixelIndex] = newColor;
        set(this, 'pixels', newPixels);
    }
}
   
