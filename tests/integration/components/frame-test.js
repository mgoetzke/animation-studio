import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | frame', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders the correct frame', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Frame />`);

    assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    await render(hbs`
      <Frame>
        template block text
      </Frame>
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });

  test('The user can edit the frame', async function(assert) {

  });

  test('The user can discard changes or save', async function(assert) {

  });

});
