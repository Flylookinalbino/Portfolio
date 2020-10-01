import jsonS from '../Model/skills.json';
import jsonP from '../Model/projects.json';

export function skillsData() {
  let data = jsonS.map((data) => data);
  return data;
}
export function projectsData() {
  let data = jsonP.map((data) => data);
  return data;
}

// To Use In File
// import { skillsData, projectsData } from './Control/Local.js';
