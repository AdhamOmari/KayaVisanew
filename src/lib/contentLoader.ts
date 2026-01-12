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
  const schengenFolder = extractedContent.folders.find((f: any) => 
    f.name === '4- تاشيرات الشنغن '
  );
  return schengenFolder?.content || { folders: [], files: {}, images: [] };
}

export function getUSAVisasContent() {
  const usaFolder = extractedContent.folders.find((f: any) => 
    f.name === '3- تاشيرات امريكا'
  );
  return usaFolder?.content || { folders: [], files: {}, images: [] };
}

export function getAllContent() {
  return extractedContent;
}
