import { stringNormalize } from '../src/main.ts'

require('./stringNormalize.spec');

String.prototype.stringNormalize = stringNormalize
