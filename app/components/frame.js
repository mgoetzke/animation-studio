import Component from '@ember/component';
import { computed } from '@ember/object';
export default class FrameComponent extends Component {
    tagName= ''

    // we'll have frame information saved as an array of colors (for now strings, future hex)
    // ex. ['red','red','red','red','red','red','red','red','red]
    @computed('pixels')  
    get pixelRows() {
        const totalPixels = this.pixels.length;
        const rowSize = Math.sqrt(totalPixels);
        const rows = [];

        while (rows.length*rowSize < totalPixels) {
            const startIndex = rows.length*rowSize;
            const endIndex = startIndex + rowSize;
            const pixelSlice = this.pixels.slice(startIndex, endIndex);
            rows.push(pixelSlice);
        }
        
        return rows;      
    }
}
   
