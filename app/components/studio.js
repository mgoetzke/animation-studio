import Component from '@ember/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FrameComponent extends Component {
    @tracked selectedColor = null;

    init() {
      super.init(...arguments)
      this.selectedColor = 'black';
    }

    @action
    updateSelectedColor(newColor) {
        this.selectedColor = newColor;
    }
}