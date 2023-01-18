import { whoAmI } from '.';

describe('test etl', function() {
  it('test etl.whoAmI', async function() {
    const result = await whoAmI();
    expect(result).not.toBeNull();
  });
});
