import { assert } from 'chai';
import { stringNormalize } from './main.ts'

describe('Replacing double quotation marks', () => {

  it('returns a sentence with normalized quotation marks', () => {
    const sentences: Array<string> = ['She said “that is not fair.”', 'She said ˝that is not fair.˝']
    const normalizedSentence: string = 'She said "that is not fair."'
    assert.equal(stringNormalize(sentences[0]), normalizedSentence);
    assert.equal(stringNormalize(sentences[1]), normalizedSentence);
  });
});

describe('Replacing single quotation marks', () => {

  it('returns a sentence with normalized quotation marks', () => {
    const sentences = ["She said ‘that is not fair.’"]
    const normalizedSentence = "She said 'that is not fair.'"
    assert.equal(stringNormalize(sentences[0]), normalizedSentence);
  });
});

describe('Replacing apostrophes', () => {
  const sentences = [
    "He wouldn´t go.",
    "He wouldn`t go.",
    "He wouldn´t go.",
    "He wouldnʻt go.",
    "He wouldnˈt go."
  ]
  const normalizedSentence = "He wouldn't go."

  it('returns a sentence with normalized apostrophes', () => {
    assert.equal(stringNormalize(sentences[0]), normalizedSentence);
  });

  it('returns a sentence with normalized apostrophes', () => {
    assert.equal(stringNormalize(sentences[1]), normalizedSentence);
  });

  it('returns a sentence with normalized apostrophes', () => {
    assert.equal(stringNormalize(sentences[2]), normalizedSentence);
  });

  it('returns a sentence with normalized apostrophes', () => {
    assert.equal(stringNormalize(sentences[3]), normalizedSentence);
  });

  it('returns a sentence with normalized apostrophes', () => {
    assert.equal(stringNormalize(sentences[4]), normalizedSentence);
  });
});

describe('Replacing commas', () => {
  const sentences = [
    "He said‚ she said.",
    "He saidˌ she said.",
    "He said， she said."
  ]
  const normalizedSentence = "He said, she said."

  it('returns a sentence with normalized apostrophes', () => {
    assert.equal(stringNormalize(sentences[0]), normalizedSentence);
  });

  it('returns a sentence with normalized apostrophes', () => {
    assert.equal(stringNormalize(sentences[1]), normalizedSentence);
  });

  it('returns a sentence with normalized apostrophes', () => {
    assert.equal(stringNormalize(sentences[2]), normalizedSentence);
  });
});
