/**
 * IDs de los PDFs del CV en Google Drive, por idioma.
 * Los usan el hero (botón de descarga) y la sección de Curriculum.
 */
export const CV_FILE_IDS: Record<string, string> = {
  es: '1O2pjeK1L7klouClx_4h8HWygIbzuKKR9',
  en: '1o8cDH8J4RzCYwx7SJzNxrSKvVncYu7gU'
};

export function cvDownloadUrl(fileId: string): string {
  return `https://drive.google.com/uc?export=download&id=${fileId}`;
}

export function cvViewUrl(fileId: string): string {
  return `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
}
