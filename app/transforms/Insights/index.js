import { normalize, schema } from 'normalizr';

const normalizeAuthors = raw => {
  // Define a authors schema
  const author = new schema.Entity('authors');
  const mySchema = { authors: [author] };
  return normalize({ authors: raw }, mySchema);
};

export { normalizeAuthors };
