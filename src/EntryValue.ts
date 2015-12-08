import Entry from './Entry';
import EntryCollection from './EntryCollection';

type EntryValue = Entry | EntryCollection<Entry> | string | number | boolean;

export default EntryValue;