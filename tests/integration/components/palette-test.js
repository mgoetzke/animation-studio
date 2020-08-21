import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | palette', function(hooks) {
  setupRenderingTest(hooks);


  test('it renders a range of colors', async function(assert) {
    this.set('colorOptions', ['black', 'white', 'red', 'blue', 'green', 'yellow', 'orange']);
    this.updateSelectedColor = () => {};
    await render(hbs`<Palette 
                @colorOptions={{this.colorOptions}}
                @selectedColor="red"
                @updateSelectedColor={{this.updateSelectedColor}}/>`);

    assert.dom('[data-test-swatch-selected="red"]').exists('accepts selected color');
    assert.dom('[data-test-swatch]').exists({ count: this.colorOptions.length });
  });
});
