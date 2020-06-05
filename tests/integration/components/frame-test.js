import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | frame', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the frame of pixels', async function(assert) {
    const samplePixels = ['red','green', 'blue', 'cyan','yellow','magenta','black','white', 'grey'];
    this.set('samplePixels', samplePixels)
    await render(hbs`<Frame @pixels={{samplePixels}}/>`);

    assert.dom('[data-test-frame-row]').exists({count: Math.sqrt(samplePixels.length)});
    assert.dom('[data-test-pixel]').exists({count: 9});
  });

  test('The user can edit frame pixels', async function(assert) {
    await render(hbs`<Frame />`);
    assert.dom('[data-test-pixel=0]').hasStyle({'background-color': 'rgb(0, 0, 0)' } ,'white is default color');
    await click('[data-test-pixel=0]');
    assert.dom('[data-test-pixel=0]').hasStyle({'background-color': 'rgb(255, 0, 0)' } ,'updates color');
  });


});
