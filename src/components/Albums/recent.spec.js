import { getRecent } from './recent';

describe.skip('recent', () => {
  it('should get albums', async () => {
    const albums = await getRecent();
    const expected = [
      'The Sciences',
      'The Clarity'
    ]
    expect(albums).toEqual(expected);
  })
})
