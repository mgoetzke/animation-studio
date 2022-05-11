import Model, {attr} from '@ember-data/model';

export default class FrameModel extends Model {
  @attr('string') pixels;
}
