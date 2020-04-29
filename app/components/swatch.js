import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default class Swatch extends Component{
      @computed('shade')
      get swatchColor() {
        return htmlSafe(`background-color: ${this.shade}`);
      }
}