import Component from '@ember/component';
import { action, set } from '@ember/object'

export default class PaletteComponent extends Component {
    selectedColor = "black";

    @action
    updateSelectedColor(newColor) {
        set(this, 'selectedColor', newColor);
    }
    
}