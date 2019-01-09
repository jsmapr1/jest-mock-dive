import service from './service';
export function getRecent() {
  return service().then(albums => {
    return albums.reverse().slice(0, 2).map(({title}) => title);
  })
}
