import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// beforeAll(() => {
//   moment.tz.setDefault('America/New_York');
//   moment.now = () => +new Date('2019-01-09T00:00:00.000Z');
// });
