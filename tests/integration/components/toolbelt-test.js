import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | toolbelt', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the color wheel and selected color', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Toolbelt />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Toolbelt>
        template block text
      </Toolbelt>
    `);
    //color wheel and pencil are present
    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('It can update the selected color', async function(assert) {
    //grab current color
    //change color
    //grab current color
    assert.ok(false);
  });

});
