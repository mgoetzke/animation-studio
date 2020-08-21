import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | studio', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('samplePixels', ['red','green', 'blue', 'cyan','yellow','magenta','black','white', 'grey']);
    this.set('colorOptions', ['black', 'white', 'red', 'blue', 'green', 'yellow', 'orange']);

    await render(hbs`<Studio @pixels={{this.samplePixels}} @colorOptions={{this.colorOptions}}/>`);

    assert.dom('[data-test-animation-frame]').exists('it shows the frame');
    assert.dom('[data-test-animation-palette]').exists('it shows a basic palette');
  });
 
  test('user can select from colors', async function(assert) {
    this.set('samplePixels', ['red','green', 'blue', 'cyan','yellow','magenta','black','white', 'grey']);
    this.set('colorOptions', ['black', 'white', 'red', 'blue', 'green', 'yellow', 'orange']);
    
    await render(hbs`<Studio @pixels={{this.samplePixels}} @colorOptions={{this.colorOptions}}/>`);
    
    assert.dom('[data-test-swatch-selected]').hasStyle({'background-color': 'rgb(0, 0, 0)' } ,'black is default selected');
    await click('[data-test-swatch=red]');
    assert.dom('[data-test-swatch-selected]').hasStyle({'background-color': 'rgb(255, 0, 0)' } ,'user can switch colors');
  });

  test('it allows interaction between palette and frame', async function(assert) {
    this.set('samplePixels', ['red','green', 'blue', 'cyan','yellow','magenta','black','white', 'grey']);
    this.set('colorOptions', ['black', 'white', 'red', 'blue', 'green', 'yellow', 'orange']);

    await render(hbs`<Studio @pixels={{this.samplePixels}} @colorOptions={{this.colorOptions}}/>`);
    await click('[data-test-swatch=orange]');
    await click('[data-test-pixel="0"]');

    assert.dom('[data-test-pixel="0"]').hasStyle({'background-color': 'rgb(255, 165, 0)' } ,'updates color');
  });
});
