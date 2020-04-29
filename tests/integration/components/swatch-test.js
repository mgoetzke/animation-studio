import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | swatch', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct color', async function(assert) {
    await render(hbs`<Swatch 
      @shade="red"
      @size="s"
      />`);
    assert.dom('[data-test-color]').hasAttribute("style","background-color: red; width:10px; height:10px", 'swatch shows color it is passed');
  });

  test('it renders the correct size', async function(assert) {
    await render(hbs`<Swatch 
      @shade="black"
      @size="l"
      />`);
    assert.dom('[data-test-size]').hasAttribute('style',"background-color: black; width:30px; height:30px", 'swatch is passed size');
  });
});
