import Component from '@ember/component';
import { computed} from '@ember/object';
import { htmlSafe } from '@ember/string';

export default class Swatch extends Component{
    tagName = ''
    swatchSizes = {'s': 10, 'm': 20, 'l': 30};

    @computed('shade','size')  
    get style() {
        const pixelSize = this.swatchSizes[this.size] || 10;
        return htmlSafe(`background-color: ${this.shade}; width:${pixelSize}px; height:${pixelSize}px`);
    }
}