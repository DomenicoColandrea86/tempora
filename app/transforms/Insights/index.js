import { normalize, schema } from 'normalizr';

const normalizeAuthors = raw => {
  // Define authors schema
  const author = new schema.Entity('authors');
  const mySchema = { authors: [author] };
  return normalize({ authors: raw }, mySchema);
};

const normalizeTags = raw => {
  // Define tags schema
  const tag = new schema.Entity('tags');
  const mySchema = { tags: [tag] };
  return normalize({ tags: raw }, mySchema);
};

export { normalizeAuthors, normalizeTags };
