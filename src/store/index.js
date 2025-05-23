import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#357aa1',
  isFrontLogoTexture: true,
  isBackLogoTexture: true,
  isFrontText: true,
  isBackText: true,
  isFullTexture: false,
  frontLogoDecal: './cakeLogo.png',
  fullDecal: './texture.jpeg',
  frontLogoPosition: [ 0.05, 0.05, 0.15 ],
  frontLogoScale: 0.05,
  backLogoDecal: './cakeLogo.png',
  backLogoPosition: [0, 0.04, -0.15],
  backLogoRotation: [0, Math.PI, 0],
  backLogoScale: 0.15,
  frontText: 'TeamName',
  frontTextPosition: [-0.03, -0.16, 0.15],
  frontTextRotation: [0, 0, 0],
  frontTextFontSize: 0.05,
  frontTextScale: [0.15, 0.04, 0.1],
  frontTextFont: 'Arial',
  frontTextSize: 64,
  frontTextColor: 'white',
  backText: 'Back Text',
  backTextPosition: [0, -0.04, -0.15],
  backTextRotation: [0, Math.PI, 0],
  backTextFontSize: 0.1,
  backTextScale: [0.15, 0.04, 0.1],
  backTextFont: 'Arial',
  backTextSize: 64,
  backTextColor: 'white',
});


export default state;
