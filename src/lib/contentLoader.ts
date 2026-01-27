import secondCitizenshipData from '@/data/second-citizenship.json';
import extractedContent from '@/data/extracted-content.json';

export function getSecondCitizenshipContent() {
  return {
    main: secondCitizenshipData.files,
    countries: secondCitizenshipData.folders[0]?.content?.folders || [],
    images: secondCitizenshipData.images
  };
}

export function getSchengenVisasContent() {
  const schengenFolder = (extractedContent as any)['4- تاشيرات الشنغن '];
  return schengenFolder || { folders: [], files: {}, images: [] };
}

export function getUSAVisasContent() {
  const usaFolder = (extractedContent as any)['3- تاشيرات امريكا'];
  return usaFolder || { folders: [], files: {}, images: [] };
}

export function getAllContent() {
  return extractedContent;
}
