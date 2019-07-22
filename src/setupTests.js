import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import moment from 'moment';

configure({ adapter: new Adapter() });

// beforeAll(() => {
//   moment.now = () => +new Date('2019-01-09T00:00:00.000Z');
// });
