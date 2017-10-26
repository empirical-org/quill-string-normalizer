import { assert } from 'chai';
import { stringNormalize } from '../src/main.ts'

describe('Replacing double quotation marks', () => {

  it('returns a sentence with normalized quotation marks', () => {
    const sentences = ['She said “that is not fair.”', 'She said ˝that is not fair.˝']
    const normalizedSentence = 'She said "that is not fair."'
    assert.equal(sentences[0].stringNormalize(), normalizedSentence);
    assert.equal(sentences[1].stringNormalize(), normalizedSentence);
  });
});

describe('Replacing single quotation marks', () => {
  const sentence = "She said ‘that is not fair.’"

  it('returns a sentence with normalized quotation marks', () => {
    const normalizedSentence = "She said 'that is not fair.'"
    assert.equal(sentence.stringNormalize(), normalizedSentence);
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
    assert.equal(sentences[0].stringNormalize(), normalizedSentence);
  });

  it('returns a sentence with normalized apostrophes', () => {
    assert.equal(sentences[1].stringNormalize(), normalizedSentence);
  });

  it('returns a sentence with normalized apostrophes', () => {
    assert.equal(sentences[2].stringNormalize(), normalizedSentence);
  });

  it('returns a sentence with normalized apostrophes', () => {
    assert.equal(sentences[3].stringNormalize(), normalizedSentence);
  });

  it('returns a sentence with normalized apostrophes', () => {
    assert.equal(sentences[4].stringNormalize(), normalizedSentence);
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
    assert.equal(sentences[0].stringNormalize(), normalizedSentence);
  });

  it('returns a sentence with normalized apostrophes', () => {
    assert.equal(sentences[1].stringNormalize(), normalizedSentence);
  });

  it('returns a sentence with normalized apostrophes', () => {
    assert.equal(sentences[2].stringNormalize(), normalizedSentence);
  });
});
