import Component from '@ember/component';
import { computed} from '@ember/object';
import { htmlSafe } from '@ember/string';

export default class Swatch extends Component{
    tagName = ''
    
    @computed('shade','size')  
    get style() {
        const size = this.translateSize(this.size);
        return htmlSafe(`background-color: ${this.shade}; width:${size}px; height:${size}px`);
    }


    translateSize(size="s") {
        switch(size){
            case("s"):
                return 10;
            case("m"):
                return 20;
            case("l"):
                return 30;
        }
    }
}