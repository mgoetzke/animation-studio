import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | palette', function(hooks) {
  setupRenderingTest(hooks);


  test('it renders a range of colors', async function(assert) {
    this.set('colorOptions', ['black', 'white', 'red', 'blue', 'green', 'yellow', 'orange']);
    await render(hbs`<Palette 
                @colorOptions={{this.colorOptions}}>
                </Palette>`);
    assert.dom('[data-test-swatch]').exists({ count: this.colorOptions.length });
  });
  
  test('user can select from colors', async function(assert) {
    this.set('colorOptions', ['black', 'white', 'red', 'blue', 'green', 'yellow', 'orange']);
    await render(hbs`<Palette 
                @colorOptions={{this.colorOptions}}>
                </Palette>`);

    assert.dom('[data-test-swatch-selected]').hasStyle({'background-color': 'rgb(0, 0, 0)' } ,'black is default selected');
    await click('[data-test-swatch=red]');
    assert.dom('[data-test-swatch-selected]').hasStyle({'background-color': 'rgb(255, 0, 0)' } ,'user can switch colors');
  });
});
