import { getRecent } from './recent';

jest.mock('./service');

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
