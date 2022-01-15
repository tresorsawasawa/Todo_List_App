/* eslint-disable import/prefer-default-export */
/* eslint-disable no-restricted-globals */

import { addTask } from './controllTools.js';

const data = addTask();
export function getTask() {
  return data.map((task) => task);
}