import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | swatch', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct color', async function(assert) {
    await render(hbs`<Swatch 
      @shade="red"
      />`);

      assert.dom('[data-test-color]').hasAttribute('style',"background-color: red", 'swatch shows color it is passed');
  });
});
