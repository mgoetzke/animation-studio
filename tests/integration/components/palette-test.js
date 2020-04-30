import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | palette', function(hooks) {
  setupRenderingTest(hooks);


  test('it renders a range of colors', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('colorOptions', ['black', 'white', 'red', 'blue', 'green', 'yellow', 'orange']);
    await render(hbs`<Palette 
                      @colorOptions={{this.colorOptions}}>
                      hi
                      </Palette>`);
    assert.equal(this.colorOptions.length, 17, 'shows possible shades');
  });

  test('user can select from colors', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Palette />`);
    assert.equal(this.element.selectedColor.name, 'black', 'black is default selected');
    await click('[data-test-color-red]');
    assert.equal(this.element.selectedColor.name, 'red', 'user can switch colors');
  });
});
